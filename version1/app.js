// refer to http://www.vvivii.com/?p=671
var _pal = [
    [ 0x00, 0x00, 0x00, 0 ],
    [ 0x80, 0x00, 0x00, 0 ],
    [ 0x00, 0x80, 0x00, 0 ],
    [ 0x80, 0x80, 0x00, 0 ],
    [ 0x00, 0x00, 0x80, 0 ],
    [ 0x80, 0x00, 0x80, 0 ],
    [ 0x00, 0x80, 0x80, 0 ],
    [ 0xc0, 0xc0, 0xc0, 0 ],
    [ 0xc0, 0xdc, 0xc0, 0 ],
    [ 0xa6, 0xca, 0xf0, 0 ],
    [ 0x00, 0x00, 0x33, 0 ],
    [ 0x33, 0x00, 0x00, 0 ],
    [ 0x33, 0x00, 0x33, 0 ],
    [ 0x00, 0x33, 0x33, 0 ],
    [ 0x16, 0x16, 0x16, 0 ],
    [ 0x1c, 0x1c, 0x1c, 0 ],
    [ 0x22, 0x22, 0x22, 0 ],
    [ 0x29, 0x29, 0x29, 0 ],
    [ 0x55, 0x55, 0x55, 0 ],
    [ 0x4d, 0x4d, 0x4d, 0 ],
    [ 0x42, 0x42, 0x42, 0 ],
    [ 0x39, 0x39, 0x39, 0 ],
    [ 0xFF, 0x7C, 0x80, 0 ],
    [ 0xFF, 0x50, 0x50, 0 ],
    [ 0xD6, 0x00, 0x93, 0 ],
    [ 0xCC, 0xEC, 0xFF, 0 ],
    [ 0xEF, 0xD6, 0xC6, 0 ],
    [ 0xE7, 0xE7, 0xD6, 0 ],
    [ 0xAD, 0xA9, 0x90, 0 ],
    [ 0x33, 0xff, 0x00, 0 ],
    [ 0x66, 0x00, 0x00, 0 ],
    [ 0x99, 0x00, 0x00, 0 ],
    [ 0xcc, 0x00, 0x00, 0 ],
    [ 0x00, 0x33, 0x00, 0 ],
    [ 0x33, 0x33, 0x00, 0 ],
    [ 0x66, 0x33, 0x00, 0 ],
    [ 0x99, 0x33, 0x00, 0 ],
    [ 0xcc, 0x33, 0x00, 0 ],
    [ 0xff, 0x33, 0x00, 0 ],
    [ 0x00, 0x66, 0x00, 0 ],
    [ 0x33, 0x66, 0x00, 0 ],
    [ 0x66, 0x66, 0x00, 0 ],
    [ 0x99, 0x66, 0x00, 0 ],
    [ 0xcc, 0x66, 0x00, 0 ],
    [ 0xff, 0x66, 0x00, 0 ],
    [ 0x00, 0x99, 0x00, 0 ],
    [ 0x33, 0x99, 0x00, 0 ],
    [ 0x66, 0x99, 0x00, 0 ],
    [ 0x99, 0x99, 0x00, 0 ],
    [ 0xcc, 0x99, 0x00, 0 ],
    [ 0xff, 0x99, 0x00, 0 ],
    [ 0x00, 0xcc, 0x00, 0 ],
    [ 0x33, 0xcc, 0x00, 0 ],
    [ 0x66, 0xcc, 0x00, 0 ],
    [ 0x99, 0xcc, 0x00, 0 ],
    [ 0xcc, 0xcc, 0x00, 0 ],
    [ 0xff, 0xcc, 0x00, 0 ],
    [ 0x66, 0xff, 0x00, 0 ],
    [ 0x99, 0xff, 0x00, 0 ],
    [ 0xcc, 0xff, 0x00, 0 ],
    [ 0x00, 0xff, 0x33, 0 ],
    [ 0x33, 0x00, 0xff, 0 ],
    [ 0x66, 0x00, 0x33, 0 ],
    [ 0x99, 0x00, 0x33, 0 ],
    [ 0xcc, 0x00, 0x33, 0 ],
    [ 0xff, 0x00, 0x33, 0 ],
    [ 0x00, 0x33, 0xff, 0 ],
    [ 0x33, 0x33, 0x33, 0 ],
    [ 0x66, 0x33, 0x33, 0 ],
    [ 0x99, 0x33, 0x33, 0 ],
    [ 0xcc, 0x33, 0x33, 0 ],
    [ 0xff, 0x33, 0x33, 0 ],
    [ 0x00, 0x66, 0x33, 0 ],
    [ 0x33, 0x66, 0x33, 0 ],
    [ 0x66, 0x66, 0x33, 0 ],
    [ 0x99, 0x66, 0x33, 0 ],
    [ 0xcc, 0x66, 0x33, 0 ],
    [ 0xff, 0x66, 0x33, 0 ],
    [ 0x00, 0x99, 0x33, 0 ],
    [ 0x33, 0x99, 0x33, 0 ],
    [ 0x66, 0x99, 0x33, 0 ],
    [ 0x99, 0x99, 0x33, 0 ],
    [ 0xcc, 0x99, 0x33, 0 ],
    [ 0xff, 0x99, 0x33, 0 ],
    [ 0x00, 0xcc, 0x33, 0 ],
    [ 0x33, 0xcc, 0x33, 0 ],
    [ 0x66, 0xcc, 0x33, 0 ],
    [ 0x99, 0xcc, 0x33, 0 ],
    [ 0xcc, 0xcc, 0x33, 0 ],
    [ 0xff, 0xcc, 0x33, 0 ],
    [ 0x33, 0xff, 0x33, 0 ],
    [ 0x66, 0xff, 0x33, 0 ],
    [ 0x99, 0xff, 0x33, 0 ],
    [ 0xcc, 0xff, 0x33, 0 ],
    [ 0xff, 0xff, 0x33, 0 ],
    [ 0x00, 0x00, 0x66, 0 ],
    [ 0x33, 0x00, 0x66, 0 ],
    [ 0x66, 0x00, 0x66, 0 ],
    [ 0x99, 0x00, 0x66, 0 ],
    [ 0xcc, 0x00, 0x66, 0 ],
    [ 0xff, 0x00, 0x66, 0 ],
    [ 0x00, 0x33, 0x66, 0 ],
    [ 0x33, 0x33, 0x66, 0 ],
    [ 0x66, 0x33, 0x66, 0 ],
    [ 0x99, 0x33, 0x66, 0 ],
    [ 0xcc, 0x33, 0x66, 0 ],
    [ 0xff, 0x33, 0x66, 0 ],
    [ 0x00, 0x66, 0x66, 0 ],
    [ 0x33, 0x66, 0x66, 0 ],
    [ 0x66, 0x66, 0x66, 0 ],
    [ 0x99, 0x66, 0x66, 0 ],
    [ 0xcc, 0x66, 0x66, 0 ],
    [ 0x00, 0x99, 0x66, 0 ],
    [ 0x33, 0x99, 0x66, 0 ],
    [ 0x66, 0x99, 0x66, 0 ],
    [ 0x99, 0x99, 0x66, 0 ],
    [ 0xcc, 0x99, 0x66, 0 ],
    [ 0xff, 0x99, 0x66, 0 ],
    [ 0x00, 0xcc, 0x66, 0 ],
    [ 0x33, 0xcc, 0x66, 0 ],
    [ 0x99, 0xcc, 0x66, 0 ],
    [ 0xcc, 0xcc, 0x66, 0 ],
    [ 0xff, 0xcc, 0x66, 0 ],
    [ 0x00, 0xff, 0x66, 0 ],
    [ 0x33, 0xff, 0x66, 0 ],
    [ 0x99, 0xff, 0x66, 0 ],
    [ 0xcc, 0xff, 0x66, 0 ],
    [ 0xff, 0x00, 0xcc, 0 ],
    [ 0xcc, 0x00, 0xff, 0 ],
    [ 0x00, 0x99, 0x99, 0 ],
    [ 0x99, 0x33, 0x99, 0 ],
    [ 0x99, 0x00, 0x99, 0 ],
    [ 0xcc, 0x00, 0x99, 0 ],
    [ 0x00, 0x00, 0x99, 0 ],
    [ 0x33, 0x33, 0x99, 0 ],
    [ 0x66, 0x00, 0x99, 0 ],
    [ 0xcc, 0x33, 0x99, 0 ],
    [ 0xff, 0x00, 0x99, 0 ],
    [ 0x00, 0x66, 0x99, 0 ],
    [ 0x33, 0x66, 0x99, 0 ],
    [ 0x66, 0x33, 0x99, 0 ],
    [ 0x99, 0x66, 0x99, 0 ],
    [ 0xcc, 0x66, 0x99, 0 ],
    [ 0xff, 0x33, 0x99, 0 ],
    [ 0x33, 0x99, 0x99, 0 ],
    [ 0x66, 0x99, 0x99, 0 ],
    [ 0x99, 0x99, 0x99, 0 ],
    [ 0xcc, 0x99, 0x99, 0 ],
    [ 0xff, 0x99, 0x99, 0 ],
    [ 0x00, 0xcc, 0x99, 0 ],
    [ 0x33, 0xcc, 0x99, 0 ],
    [ 0x66, 0xcc, 0x66, 0 ],
    [ 0x99, 0xcc, 0x99, 0 ],
    [ 0xcc, 0xcc, 0x99, 0 ],
    [ 0xff, 0xcc, 0x99, 0 ],
    [ 0x00, 0xff, 0x99, 0 ],
    [ 0x33, 0xff, 0x99, 0 ],
    [ 0x66, 0xcc, 0x99, 0 ],
    [ 0x99, 0xff, 0x99, 0 ],
    [ 0xcc, 0xff, 0x99, 0 ],
    [ 0xff, 0xff, 0x99, 0 ],
    [ 0x00, 0x00, 0xcc, 0 ],
    [ 0x33, 0x00, 0x99, 0 ],
    [ 0x66, 0x00, 0xcc, 0 ],
    [ 0x99, 0x00, 0xcc, 0 ],
    [ 0xcc, 0x00, 0xcc, 0 ],
    [ 0x00, 0x33, 0x99, 0 ],
    [ 0x33, 0x33, 0xcc, 0 ],
    [ 0x66, 0x33, 0xcc, 0 ],
    [ 0x99, 0x33, 0xcc, 0 ],
    [ 0xcc, 0x33, 0xcc, 0 ],
    [ 0xff, 0x33, 0xcc, 0 ],
    [ 0x00, 0x66, 0xcc, 0 ],
    [ 0x33, 0x66, 0xcc, 0 ],
    [ 0x66, 0x66, 0x99, 0 ],
    [ 0x99, 0x66, 0xcc, 0 ],
    [ 0xcc, 0x66, 0xcc, 0 ],
    [ 0xff, 0x66, 0x99, 0 ],
    [ 0x00, 0x99, 0xcc, 0 ],
    [ 0x33, 0x99, 0xcc, 0 ],
    [ 0x66, 0x99, 0xcc, 0 ],
    [ 0x99, 0x99, 0xcc, 0 ],
    [ 0xcc, 0x99, 0xcc, 0 ],
    [ 0xff, 0x99, 0xcc, 0 ],
    [ 0x00, 0xcc, 0xcc, 0 ],
    [ 0x33, 0xcc, 0xcc, 0 ],
    [ 0x66, 0xcc, 0xcc, 0 ],
    [ 0x99, 0xcc, 0xcc, 0 ],
    [ 0xcc, 0xcc, 0xcc, 0 ],
    [ 0xff, 0xcc, 0xcc, 0 ],
    [ 0x00, 0xff, 0xcc, 0 ],
    [ 0x33, 0xff, 0xcc, 0 ],
    [ 0x66, 0xff, 0x99, 0 ],
    [ 0x99, 0xff, 0xcc, 0 ],
    [ 0xcc, 0xff, 0xcc, 0 ],
    [ 0xff, 0xff, 0xcc, 0 ],
    [ 0x33, 0x00, 0xcc, 0 ],
    [ 0x66, 0x00, 0xff, 0 ],
    [ 0x99, 0x00, 0xff, 0 ],
    [ 0x00, 0x33, 0xcc, 0 ],
    [ 0x33, 0x33, 0xff, 0 ],
    [ 0x66, 0x33, 0xff, 0 ],
    [ 0x99, 0x33, 0xff, 0 ],
    [ 0xcc, 0x33, 0xff, 0 ],
    [ 0xff, 0x33, 0xff, 0 ],
    [ 0x00, 0x66, 0xff, 0 ],
    [ 0x33, 0x66, 0xff, 0 ],
    [ 0x66, 0x66, 0xcc, 0 ],
    [ 0x99, 0x66, 0xff, 0 ],
    [ 0xcc, 0x66, 0xff, 0 ],
    [ 0xff, 0x66, 0xcc, 0 ],
    [ 0x00, 0x99, 0xff, 0 ],
    [ 0x33, 0x99, 0xff, 0 ],
    [ 0x66, 0x99, 0xff, 0 ],
    [ 0x99, 0x99, 0xff, 0 ],
    [ 0xcc, 0x99, 0xff, 0 ],
    [ 0xff, 0x99, 0xff, 0 ],
    [ 0x00, 0xcc, 0xff, 0 ],
    [ 0x33, 0xcc, 0xff, 0 ],
    [ 0x66, 0xcc, 0xff, 0 ],
    [ 0x99, 0xcc, 0xff, 0 ],
    [ 0xcc, 0xcc, 0xff, 0 ],
    [ 0xff, 0xcc, 0xff, 0 ],
    [ 0x33, 0xff, 0xff, 0 ],
    [ 0x66, 0xff, 0xcc, 0 ],
    [ 0x99, 0xff, 0xff, 0 ],
    [ 0xcc, 0xff, 0xff, 0 ],
    [ 0xff, 0x66, 0x66, 0 ],
    [ 0x66, 0xff, 0x66, 0 ],
    [ 0xff, 0xff, 0x66, 0 ],
    [ 0x66, 0x66, 0xff, 0 ],
    [ 0xff, 0x66, 0xff, 0 ],
    [ 0x66, 0xff, 0xff, 0 ],
    [ 0xA5, 0x00, 0x21, 0 ],
    [ 0x5f, 0x5f, 0x5f, 0 ],
    [ 0x77, 0x77, 0x77, 0 ],
    [ 0x86, 0x86, 0x86, 0 ],
    [ 0x96, 0x96, 0x96, 0 ],
    [ 0xcb, 0xcb, 0xcb, 0 ],
    [ 0xb2, 0xb2, 0xb2, 0 ],
    [ 0xd7, 0xd7, 0xd7, 0 ],
    [ 0xdd, 0xdd, 0xdd, 0 ],
    [ 0xe3, 0xe3, 0xe3, 0 ],
    [ 0xea, 0xea, 0xea, 0 ],
    [ 0xf1, 0xf1, 0xf1, 0 ],
    [ 0xf8, 0xf8, 0xf8, 0 ],
    [ 0xff, 0xfb, 0xf0, 0 ],
    [ 0xa0, 0xa0, 0xa4, 0 ],
    [ 0x80, 0x80, 0x80, 0 ],
    [ 0xff, 0x00, 0x00, 0 ],
    [ 0x00, 0xff, 0x00, 0 ],
    [ 0xff, 0xff, 0x00, 0 ],
    [ 0x00, 0x00, 0xff, 0 ],
    [ 0xff, 0x00, 0xff, 0 ],
    [ 0x00, 0xff, 0xff, 0 ],
    [ 0xff, 0xff, 0xff, 0 ] 
];

var fs = require("fs");

// refer to http://dev.gameres.com/Program/Visual/Other/256color.htm
//          https://github.com/liballeg/allegro5/blob/4.3/src/color.c#L268-L328
var getPixels = require("get-pixels");
var sugar = require("sugar");
var algorithm = require("algorithmjs");

/**
 * bestfitInit
 *   Color matching is done with weighted squares, which are much faster
 *   if we pregenerate a little lookup table...
 */
const MAX_INT = 2147483647;
const PAL_SIZE = 256;
var pal = [];
var palHtml = "";
for(var i = 0; i < PAL_SIZE; i ++) {
    pal.push({ r: _pal[i][0], g: _pal[i][1], b: _pal[i][2] });

    palHtml += "<div style=\"width: 20px; height: 15px; float: left; margin-right: 5px; margin-bottom: 5px; background: rgba(" + _pal[i][0] + ", " + _pal[i][1] + ", " + _pal[i][2] + ", 1);\"></div>";
}
fs.writeFileSync("pal.html", palHtml, "utf8");

var colDiff = new Array(3 * 128);
function bestfitInit() {
    for(var i = 0; i < colDiff.length; i++) colDiff[i] = 0;

    for(var i = 1; i < 64; i++) {
        var k = i * i;
        colDiff[0 + i] = colDiff[0 + 128 - i] = k * (59 * 59);
        colDiff[128 + i] = colDiff[128 + 128 - i] = k * (30 * 30);
        colDiff[256 + i] = colDiff[256 + 128 - i] = k * (11 * 11);
    }
}

function bestfitColor(pal, r, g, b) {
    var _colDiff;
    var bestfit = 0;
    var lowest = MAX_INT;

    if(colDiff[1] === undefined) bestfitInit();

    // no transparent (pink) color
    // because we're not making game.
    // if((r === 63) && (g === 0) && (b === 63)) i = 0;
    // else i = 1
    var i = 1;
    
    while(i < PAL_SIZE) {
        var rgb = pal[i];
        _colDiff = colDiff[0 + ((rgb.g - g) & 0x7f)];
        if(_colDiff < lowest) {
            _colDiff += colDiff[128 + ((rgb.r - r) & 0x7f)];
            if(_colDiff < lowest) {
                _colDiff += colDiff[256 + ((rgb.b - b) & 0x7f)];
                if(_colDiff < lowest) {
                    bestfit = i;
                    if(0 === _colDiff) return bestfit;
                    lowest = _colDiff;
                }
            }
        }

        i++;
    }

    return bestfit;
}

getPixels("pic.jpg", function(err, pixels) {
    var w = pixels._shape1;
    var h = pixels._shape0;

    var colors = {};
    
    var data = pixels.data;
    var col = 0;
    var row = 0;
    for(var i = 0; i < data.length; i += 4) {
        var r = data.readUInt8(i);
        var g = data.readUInt8(i + 1);
        var b = data.readUInt8(i + 2);

        var best = bestfitColor(pal, r, g, b);
        r = pal[best].r.toString(16);
        g = pal[best].g.toString(16);
        b = pal[best].b.toString(16);

        if(r.length === 1) r = "0" + r;
        if(g.length === 1) g = "0" + g;
        if(b.length === 1) b = "0" + b;

        if(colors[r + g + b] === undefined) colors[r + g + b] = -1;
        colors[r + g + b]++;
        
        col++;
        if(col >= w) {
            col = 0;
            row++;
        }
    }

    console.log("bilibili~");

    var result = [];
    for(var key in colors) {
        result.push({ color: key, count: colors[key] });
    }

    result.qsort(function(a, b) {
        if(a.count > b.count) return true;
        if(a.count < b.count) return false;
        return a.color > b.color;
    });

    console.log(result);
    console.log(result.length);

    var string = "";
    for(var i = 0; i < result.length; i++) {
        string += "<div style=\"width: 50px; height: 21px; float: left; margin-right: 5px; margin-bottom: 5px; background: #" + result[i].color + "; color: #fff; font-size: 12px; text-align: center; padding-top: 9px;\">" + result[i].count + "</div>";
    }

    fs.writeFileSync("test.html", string, "utf8");
    console.log("done");
});

