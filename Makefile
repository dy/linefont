
help:
	@echo "###"
	@echo "# Build targets for Linefont"
	@echo "###"
	@echo
	@echo "  make build:  Builds the fonts and places them in the fonts/ directory"
	@echo "  make test:   Tests the fonts with fontbakery"
	@echo

build: node_modules build.stamp

node_modules: package.json
	npm install

template.stamp: _sources/master.ufo _sources/master.ufo/features.fea _sources/master.ufo/fontinfo.plist _sources/Linefont.designspace node_modules plopfile.cjs _sources/config.yaml
	npx plop --plopfile plopfile.cjs build-ufo
	touch template.stamp

build.stamp: venv template.stamp
	. venv/bin/activate && for file in sources/*.ufo; do ufonormalizer -a --float-precision 3 -m $$file; done && gftools builder sources/config.yaml && python scripts/woff2.py fonts/webfonts fonts/variable/*.ttf fonts/ttf/*.ttf && cp "fonts/webfonts/Linefont[wdth,wght].woff2" fonts/variable/
	touch build.stamp

venv: venv/touchfile

venv/touchfile: requirements.txt
	test -x venv/bin/python || python3 -m venv venv
	venv/bin/pip install -Ur requirements.txt
	touch venv/touchfile

# Google Fonts profile on the variable font (the file Google Fonts ships); any FAIL fails.
# Excluded, by design: vertical metrics widened in 3.3 (caret span -30..130) differ from the
# older version on Google Fonts until it updates; width names come from the axis registry and
# every named instance is at Normal width, so no instance name reaches the length limit.
test: venv build.stamp
	. venv/bin/activate && mkdir -p out/fontbakery && fontbakery check-googlefonts -l WARN --full-lists --succinct -x vertical_metrics_regressions -x family_and_style_max_length --badges out/badges --html out/fontbakery/fontbakery-report.html --ghmarkdown out/fontbakery/fontbakery-report.md fonts/variable/*.ttf

proof: venv build.stamp
	. venv/bin/activate && mkdir -p out/ out/proof && diffenator2 proof $(shell find fonts/ttf -type f) -o out/proof

clean:
	rm -rf sources out fonts template.stamp build.stamp venv
