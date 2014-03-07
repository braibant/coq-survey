function hgraph(id,width, scale)
{
    var graph=document.querySelector("#" + id);
    graph.className = "hgraph";

    this.width= width;
    this.graph= graph;
    this.scale= scale;
}

hgraph.prototype = {
    hbar: function(name,width){
        var line = document.createElement('div');
        var label = document.createElement('span');
        var bar = document.createElement('span');

        label.classList.add("hlabel");
        bar.classList.add("hbar");

        line.appendChild(label);
        line.appendChild(bar);

        label.innerHTML = name;

        bar.style.width = this.scale * width + "px";
        bar.innerHTML = width;

        this.graph.appendChild(line)
    }
}

function hbars(id,width,scale)
{
    var graph=document.querySelector("#" + id);
    graph.className = "hbars";

    this.width= width;
    this.graph= graph;
    this.scale=scale;
    this.line = {}

}

hbars.prototype = {
    label: function(name){
        this.line = document.createElement('div');
        var label = document.createElement('span');
        label.classList.add("hlabel");
        label.innerHTML = name;
        this.line.appendChild(label);
    },
    hbar: function(width,color){
        var bar = document.createElement('span');
        bar.classList.add("hbar");
        this.line.appendChild(bar);
        bar.style.width = this.scale * width + "px";
        bar.innerHTML = width;
        bar.style.backgroundColor=color;
    },
    endline:function(){
        this.graph.appendChild(this.line);
    }
}
