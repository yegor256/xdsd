all: target lint site

target:
	mkdir -p target

scsslint:
	scss-lint -c .scss-lint.yml 

target/CNAME: target
	echo "www.xdsd.org" > target/CNAME

target/logo.svg: target
	cp images/logo.svg target

target/logo.png: target
	cp images/logo.png target

target/XDSD-WhitePaper.pdf: target
	cp pdf/XDSD-WhitePaper.pdf target

target/robots.txt: target
	echo "" > target/robots.txt

target/%.html : pages/%.haml target
	haml --style=indented $< > $@

target/css/%.css: sass/%.scss target
	mkdir -p target/css
	sass --style=compressed --sourcemap=none $< $@

HTML=target/404.html target/index.html
CSS=target/css/index.css

site: $(HTML) $(CSS) target/CNAME target/robots.txt target/logo.png target/logo.svg target/XDSD-WhitePaper.pdf

lint: scsslint

clean:
	rm -rf target

