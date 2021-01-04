"use strict";
//patron builder
var Torta = /** @class */ (function () {
    function Torta() {
        this.delicacy = false;
        this.taste = "";
        this.chantilli = false;
        this.otherIngredients = [""];
    }
    /* metodos */
    Torta.prototype.setDelicacy = function () {
        this.delicacy = true;
        return this;
    };
    Torta.prototype.setChantilli = function () {
        this.chantilli = true;
        return this;
    };
    Torta.prototype.setTaste = function (taste) {
        this.taste = taste;
        return this;
    };
    Torta.prototype.setOtherIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Torta.prototype.build = function () {
        return this;
    };
    return Torta;
}());
//con este patron podemos agregar propieades custom
var pedido = new Torta();
pedido
    .setChantilli()
    .setDelicacy()
    .setTaste("Chocolate")
    .setOtherIngredients(["fruits", "cookies"])
    .build();
console.log(pedido);
