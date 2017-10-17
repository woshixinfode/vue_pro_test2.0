/**
 * Created by IBM on 2017-08-19.
 */
export default function (el) {
    var oDiv = el;
    oDiv.onmousedown = function (e) {
        var l = e.clientX - oDiv.offsetLeft;
        var t = e.clientY - oDiv.offsetTop;
        console.log(l, t);
        document.onmousemove = function (e) {
            oDiv.style.left = e.clientX - l + 'px';
            oDiv.style.top = e.clientY - t + 'px';
        };
        oDiv.onmouseup = function () {
            document.onmousemove = null;
            oDiv.onmouseup = null;
        };
    };
}

//# sourceMappingURL=Drag-compiled.js.map