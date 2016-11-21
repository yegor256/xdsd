OPTS=-shell-escape -halt-on-error -interaction=errorstopmode -output-directory=./target
DEPS=$(wildcard ./**/*.tex)

all: target target/XDSD-WhitePaper.pdf

target:
	mkdir -p target

target/XDSD-WhitePaper.pdf: target $(DEPS)
	pdflatex ${OPTS} XDSD-WhitePaper.tex > target/wp.log || (cat target/wp.log; exit -1)
	cd target; bibtex XDSD-WhitePaper
	pdflatex ${OPTS} XDSD-WhitePaper.tex > target/wp.log || (cat target/wp.log; exit -1)
	pdflatex ${OPTS} XDSD-WhitePaper.tex > target/wp.log || (cat target/wp.log; exit -1)
	echo "target/XDSD-WhitePaper.pdf is ready!"

clean:
	rm -rf target

