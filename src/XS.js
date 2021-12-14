"use strict";

const _ = require("lodash");

const uuid = require("uuid");

const CryptoJS = require("crypto-js");

const nil = "00000000-0000-0000-0000-000000000000";

const caught = "";

exports.uuidv0 = nil; 

exports.uuidv1 = function(w) {
  const x = _.fill(Array(16), 0);
  const y = uuid.v1({
    msecs: w.getTime(),
    random: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]
  });
  return y.toUpperCase();
};

exports.uuidv3 = function(w) {
  return function(x) {
    return uuid.v3(x,w).toUpperCase();
  };
};

exports.uuidv4 = uuid.v4().toUpperCase();

exports.uuidv5 = function(w) {
  return function(x) {
    return uuid.v5(x,w).toUpperCase();
  };
};

exports.encrypt = function(w) {
  return function(x) {
    try {
      return CryptoJS.AES.encrypt(x,w).toString();
    } catch (e) {
      return caught;
    }
  };
};

exports.decrypt = function(w) {
  return function(x) {
    try {
      return CryptoJS.AES.decrypt(x,w).toString(CryptoJS.enc.Utf8);
    } catch (e) {
      return caught;
    }
  };
};
