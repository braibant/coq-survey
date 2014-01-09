all:
	ocamlbuild -use-ocamlfind robot.native

clean:
	ocamlbuild -clean
