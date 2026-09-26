
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
	. venv/bin/activate && for file in sources/*.ufo; do ufonormalizer -a --float-precision 3 -m $$file; done && gftools builder sources/config.yaml && python scripts/pairs.py fonts/variable/*.ttf fonts/ttf/*.ttf && python scripts/woff2.py fonts/webfonts fonts/variable/*.ttf fonts/ttf/*.ttf && cp "fonts/webfonts/Linefont[wdth,wght].woff2" fonts/variable/
	touch build.stamp

venv: venv/touchfile

venv/touchfile: requirements.txt
	test -x venv/bin/python || python3 -m venv venv
	venv/bin/pip install -Ur requirements.txt
	touch venv/touchfile

test: venv build.stamp
	. venv/bin/activate && python scripts/test-pairs.py fonts/variable/*.ttf fonts/ttf/*.ttf
	. venv/bin/activate && mkdir -p out/ out/fontbakery && fontbakery check-googlefonts -l WARN --full-lists --succinct --badges out/badges --html out/fontbakery/fontbakery-report.html --ghmarkdown out/fontbakery/fontbakery-report.md $(shell find fonts/ttf -type f)  || echo '::warning file=sources/config.yaml,title=Fontbakery failures::The fontbakery QA check reported errors in your font. Please check the generated report.'

proof: venv build.stamp
	. venv/bin/activate && mkdir -p out/ out/proof && diffenator2 proof $(shell find fonts/ttf -type f) -o out/proof

clean:
	rm -rf sources out fonts template.stamp build.stamp venv
