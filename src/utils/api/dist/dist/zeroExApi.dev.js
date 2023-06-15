"use strict";

exports.__esModule = true;
exports.getConfiguredZeroExApi = void 0;

var flash_mint_sdk_1 = require("flash-mint-sdk/");

var server_1 = require("constants/server");

function getConfiguredZeroExApi(swapPathOverride) {
  var headers = server_1.getIndexApiHeaders();
  var swapSTR = 'swap';
  var netSTR = 'mainnet/';
  var baseurl = 'https://api.indexcoop.com/0x';

  if (swapPathOverride.includes(swapSTR) && swapPathOverride.includes(netSTR)) {
    baseurl = 'https://api.0x.org';
    swapPathOverride = swapPathOverride.replace(netSTR, '');
  }

  return new flash_mint_sdk_1.ZeroExApi("" + baseurl, server_1.ZeroExAffiliateAddress, headers, swapPathOverride);
}

exports.getConfiguredZeroExApi = getConfiguredZeroExApi;