open Http_client.Convenience

(* http://www.dblp.org/search/api/?q=thomas*%20brai*&h=1000&c=4&f=0&format=json *)

let encode s =
  Netencoding.Url.encode ~plus:false s

let addr s =
  Printf.sprintf "http://www.dblp.org/search/api/?q=%s&format=json" (encode s)


let papers s =
  let open Yojson.Basic.Util in
  member "result" |>
      member "hits"  |> 
	  member "hit" |> to_string
  
  
let rec main () =
  let s = read_line () in 
  let query = addr s in 
  Printf.eprintf "query:%s\n%!" query;
  let result = Yojson.Basic.of_string (http_get query) in 
  let papers = papers result in 
  Printf.eprintf "%s\n%!" papers ;
  main ()

let _ = main ()
