var builddata = function () {
    var source = [];
    var items = [];
    // build hierarchical source.
    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item["text"];
        var parentid = item["parentid"];
        var id = item["id"];
        var ref = item["ref"];
        var img = item["img"];
        var target = item["target"];

        if (items[parentid]) {
            var item = { parentid: parentid, label: label, item: item, ref: ref, img: img, target: target };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = { parentid: parentid, label: label, item: item, ref: ref, img: img, target: target };
            source[id] = items[id];
        }
    }
    return source;
}
var source = builddata();

var buildUL = function (parent, items) {
    $.each(items, function () {
        if (this.label) {
            // create LI element and append it to the parent element.
            if (this.img == null) {
               var li = $("<li><a href=\"" + this.ref + "\">" + this.label + "</li>");
            }
            else {
               var li = $("<li><a href=\"" + this.ref + "\">" + this.img + "</li>");
            }
            li.appendTo(parent);
            // if there are sub items, call the buildUL function.
            if (this.items && this.items.length > 0) {
                var ul = $("<ul></ul>");
                ul.appendTo(li);
                buildUL(ul, this.items);
            }
        }
    });
}
var ul = $("<ul></ul>");
ul.appendTo("#nav");
buildUL(ul, source);