# f\*ck जावास्क्रिप्ट क्या है

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> मजाकिया और मुश्किल जावास्क्रिप्ट उदाहरणों की एक सूची

जावास्क्रिप्ट एक महान भाषा है। इसका एक सरल वाक्यविन्यास है, एक बड़ा पारिस्थितिकी तंत्र, और, जो सबसे महत्वपूर्ण है, एक महान समुदाय।

उसी समय, हम सभी जानते हैं कि जावास्क्रिप्ट मुश्किल भागों के साथ काफी मज़ेदार भाषा है। उनमें से कुछ हमारी रोज़मर्रा की नौकरी को जल्दी से नरक में बदल सकते हैं, और उनमें से कुछ हमें ज़ोर से हँसा सकते हैं।

WTFJS के लिए मूल विचार है [Brian Leroux](https://twitter.com/brianleroux). यह सूची उनकी बातों से प्रेरित है [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node पैकेज्ड पांडुलिपि

आप इस हैंडबुक को `npm` का उपयोग करके स्थापित कर सकते हैं। यहां जाओ:

```
$ npm install -g wtfjs
```

अब आपको कमांड लाइन पर `wtfjs` चलाने में सक्षम होना चाहिए। यह आपके चयनित `$ PAGER` में मैनुअल को खोलेगा। अन्यथा, आप यहां पढ़ना जारी रख सकते हैं।

स्रोत यहां उपलब्ध है: <https://github.com/denysdovhan/wtfjs>

# Translations

Currently, there are these translations of **wtfjs**:

- [中文版](./README-zh-cn.md)
- [हिन्दी](./README-hi.md)

[**एक और अनुवाद का अनुरोध करें**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Table of Contents

- [💪🏻 प्रेरणा](#-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A4%A3%E0%A4%BE)
- [✍🏻 नोटेशन](#-%E0%A4%A8%E0%A5%8B%E0%A4%9F%E0%A5%87%E0%A4%B6%E0%A4%A8)
- [👀 उदाहरण](#-%E0%A4%89%E0%A4%A6%E0%A4%BE%E0%A4%B9%E0%A4%B0%E0%A4%A3)
  - [`[]` के बराबर`![]`](#-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%B0%E0%A4%BE%E0%A4%AC%E0%A4%B0)
  - [`true` is not equal `![]`, but not equal `[]` too](#true-is-not-equal--but-not-equal--too)
  - [true is false](#true-is-false)
  - [baNaNa](#banana)
  - [`NaN` is not a `NaN`](#nan-is-not-a-nan)
  - [यह विफल है](#%E0%A4%AF%E0%A4%B9-%E0%A4%B5%E0%A4%BF%E0%A4%AB%E0%A4%B2-%E0%A4%B9%E0%A5%88)
  - [`[]` is truthy, but not `true`](#-is-truthy-but-not-true)
  - [`null` is falsy, but not `false`](#null-is-falsy-but-not-false)
  - [`document.all` is an object, but it is undefined](#documentall-is-an-object-but-it-is-undefined)
  - [न्यूनतम मान शून्य से अधिक है](#%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%A4%E0%A4%AE-%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%B6%E0%A5%82%E0%A4%A8%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A5%87-%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95-%E0%A4%B9%E0%A5%88)
  - [फंक्शन कोई फंक्शन नहीं है](#%E0%A4%AB%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%95%E0%A5%8B%E0%A4%88-%E0%A4%AB%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82-%E0%A4%B9%E0%A5%88)
  - [Adding arrays](#adding-arrays)
  - [सरणी में अल्पविराम](#%E0%A4%B8%E0%A4%B0%E0%A4%A3%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%85%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A4%B5%E0%A4%BF%E0%A4%B0%E0%A4%BE%E0%A4%AE)
  - [ऐरे समानता एक राक्षस है](#%E0%A4%90%E0%A4%B0%E0%A5%87-%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%A4%E0%A4%BE-%E0%A4%8F%E0%A4%95-%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%B8-%E0%A4%B9%E0%A5%88)
  - [`undefined` and `Number`](#undefined-and-number)
  - [`parseInt` एक बुरा आदमी है](#parseint-%E0%A4%8F%E0%A4%95-%E0%A4%AC%E0%A5%81%E0%A4%B0%E0%A4%BE-%E0%A4%86%E0%A4%A6%E0%A4%AE%E0%A5%80-%E0%A4%B9%E0%A5%88)
  - [`सत्य` और` असत्य` के साथ गणित](#%E0%A4%B8%E0%A4%A4%E0%A5%8D%E0%A4%AF-%E0%A4%94%E0%A4%B0-%E0%A4%85%E0%A4%B8%E0%A4%A4%E0%A5%8D%E0%A4%AF-%E0%A4%95%E0%A5%87-%E0%A4%B8%E0%A4%BE%E0%A4%A5-%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4)
  - [HTML टिप्पणियाँ जावास्क्रिप्ट में मान्य हैं](#html-%E0%A4%9F%E0%A4%BF%E0%A4%AA%E0%A5%8D%E0%A4%AA%E0%A4%A3%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81-%E0%A4%9C%E0%A4%BE%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A5%8D%E0%A4%9F-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%AF-%E0%A4%B9%E0%A5%88%E0%A4%82)
  - [`NaN` is ~~not~~ a number](#nan-is-not-a-number)
  - [`[]` and `null` are objects](#-and-null-are-objects)
  - [Magically increasing numbers](#magically-increasing-numbers)
  - [Precision of `0.1 + 0.2`](#precision-of-01--02)
  - [पैचिंग नंबर](#%E0%A4%AA%E0%A5%88%E0%A4%9A%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0)
  - [Comparison of three numbers](#comparison-of-three-numbers)
  - [मजेदार गणित](#%E0%A4%AE%E0%A4%9C%E0%A5%87%E0%A4%A6%E0%A4%BE%E0%A4%B0-%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4)
  - [RegExps का जोड़](#regexps-%E0%A4%95%E0%A4%BE-%E0%A4%9C%E0%A5%8B%E0%A4%A1%E0%A4%BC)
  - [स्ट्रिंग्स `स्ट्रिंग` के उदाहरण नहीं हैं](#%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A5%8D%E0%A4%B8-%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%87-%E0%A4%89%E0%A4%A6%E0%A4%BE%E0%A4%B9%E0%A4%B0%E0%A4%A3-%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82-%E0%A4%B9%E0%A5%88%E0%A4%82)
  - [बैकटिक्स के साथ कॉलिंग फ़ंक्शन](#%E0%A4%AC%E0%A5%88%E0%A4%95%E0%A4%9F%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8-%E0%A4%95%E0%A5%87-%E0%A4%B8%E0%A4%BE%E0%A4%A5-%E0%A4%95%E0%A5%89%E0%A4%B2%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%AB%E0%A4%BC%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B6%E0%A4%A8)
  - [पुकार पुकार पुकार](#%E0%A4%AA%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B0-%E0%A4%AA%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B0-%E0%A4%AA%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%B0)
  - [A `constructor` property](#a-constructor-property)
  - [वस्तु की संपत्ति की कुंजी के रूप में वस्तु](#%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81-%E0%A4%95%E0%A5%80-%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BF-%E0%A4%95%E0%A5%80-%E0%A4%95%E0%A5%81%E0%A4%82%E0%A4%9C%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%B0%E0%A5%82%E0%A4%AA-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81)
  - [प्रोटोटाइपिंग को `__proto__` के साथ एक्सेस करना](#%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%9F%E0%A5%8B%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%AA%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%8B-__proto__-%E0%A4%95%E0%A5%87-%E0%A4%B8%E0%A4%BE%E0%A4%A5-%E0%A4%8F%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A5%87%E0%A4%B8-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE)
  - [`` `$ {{वस्तु}}` ``](#--%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81-)
  - [डिफ़ॉल्ट मानों के साथ विनाशकारी](#%E0%A4%A1%E0%A4%BF%E0%A4%AB%E0%A4%BC%E0%A5%89%E0%A4%B2%E0%A5%8D%E0%A4%9F-%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B8%E0%A4%BE%E0%A4%A5-%E0%A4%B5%E0%A4%BF%E0%A4%A8%E0%A4%BE%E0%A4%B6%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80)
  - [डॉट्स और फैल रहा है](#%E0%A4%A1%E0%A5%89%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%AB%E0%A5%88%E0%A4%B2-%E0%A4%B0%E0%A4%B9%E0%A4%BE-%E0%A4%B9%E0%A5%88)
  - [लेबल](#%E0%A4%B2%E0%A5%87%E0%A4%AC%E0%A4%B2)
  - [Nested labels](#nested-labels)
  - [कपटी `कोशिश..चेक`](#%E0%A4%95%E0%A4%AA%E0%A4%9F%E0%A5%80-%E0%A4%95%E0%A5%8B%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A4%9A%E0%A5%87%E0%A4%95)
  - [क्या यह कई विरासत है?](#%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AF%E0%A4%B9-%E0%A4%95%E0%A4%88-%E0%A4%B5%E0%A4%BF%E0%A4%B0%E0%A4%BE%E0%A4%B8%E0%A4%A4-%E0%A4%B9%E0%A5%88)
  - [एक जनरेटर जो खुद उपजता है](#%E0%A4%8F%E0%A4%95-%E0%A4%9C%E0%A4%A8%E0%A4%B0%E0%A5%87%E0%A4%9F%E0%A4%B0-%E0%A4%9C%E0%A5%8B-%E0%A4%96%E0%A5%81%E0%A4%A6-%E0%A4%89%E0%A4%AA%E0%A4%9C%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88)
  - [कक्षा का एक वर्ग](#%E0%A4%95%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%8F%E0%A4%95-%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%97)
  - [गैर-सहकर्मी वस्तुएं](#%E0%A4%97%E0%A5%88%E0%A4%B0-%E0%A4%B8%E0%A4%B9%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A5%80-%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%8F%E0%A4%82)
  - [मुश्किल तीर कार्य](#%E0%A4%AE%E0%A5%81%E0%A4%B6%E0%A5%8D%E0%A4%95%E0%A4%BF%E0%A4%B2-%E0%A4%A4%E0%A5%80%E0%A4%B0-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF)
  - [एरो फ़ंक्शंस एक निर्माता नहीं हो सकता है](#%E0%A4%8F%E0%A4%B0%E0%A5%8B-%E0%A4%AB%E0%A4%BC%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B6%E0%A4%82%E0%A4%B8-%E0%A4%8F%E0%A4%95-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A4%E0%A4%BE-%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82-%E0%A4%B9%E0%A5%8B-%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88)
  - [`तर्क` और तीर कार्य](#%E0%A4%A4%E0%A4%B0%E0%A5%8D%E0%A4%95-%E0%A4%94%E0%A4%B0-%E0%A4%A4%E0%A5%80%E0%A4%B0-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF)
  - [मुश्किल वापसी](#%E0%A4%AE%E0%A5%81%E0%A4%B6%E0%A5%8D%E0%A4%95%E0%A4%BF%E0%A4%B2-%E0%A4%B5%E0%A4%BE%E0%A4%AA%E0%A4%B8%E0%A5%80)
  - [ऑब्जेक्ट पर कार्य असाइन करना](#%E0%A4%91%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%9F-%E0%A4%AA%E0%A4%B0-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF-%E0%A4%85%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%A8-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE)
  - [सरणियों के साथ ऑब्जेक्ट गुण तक पहुँचना](#%E0%A4%B8%E0%A4%B0%E0%A4%A3%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B8%E0%A4%BE%E0%A4%A5-%E0%A4%91%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%9F-%E0%A4%97%E0%A5%81%E0%A4%A3-%E0%A4%A4%E0%A4%95-%E0%A4%AA%E0%A4%B9%E0%A5%81%E0%A4%81%E0%A4%9A%E0%A4%A8%E0%A4%BE)
  - [Null and Relational Operators](#null-and-relational-operators)
  - [`Number.toFixed ()` विभिन्न संख्याएँ प्रदर्शित करता है](#numbertofixed--%E0%A4%B5%E0%A4%BF%E0%A4%AD%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A8-%E0%A4%B8%E0%A4%82%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%8F%E0%A4%81-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%BF%E0%A4%A4-%E0%A4%95%E0%A4%B0%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88)
  - [`Math.max()` less than `Math.min()`](#mathmax-less-than-mathmin)
  - [तुलना `null` से` 0` तक](#%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A4%A8%E0%A4%BE-null-%E0%A4%B8%E0%A5%87-0-%E0%A4%A4%E0%A4%95)
  - [समान परिवर्तनशील पुनर्वितरण](#%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%A8%E0%A4%B6%E0%A5%80%E0%A4%B2-%E0%A4%AA%E0%A5%81%E0%A4%A8%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3)
  - [डिफ़ॉल्ट व्यवहार Array.prototyp.sort ()](#%E0%A4%A1%E0%A4%BF%E0%A4%AB%E0%A4%BC%E0%A5%89%E0%A4%B2%E0%A5%8D%E0%A4%9F-%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%B9%E0%A4%BE%E0%A4%B0-arrayprototypsort-)
- [📚 अन्य संसाधन](#-%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A4%BE%E0%A4%A7%E0%A4%A8)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 💪🏻 प्रेरणा

> सिर्फ मनोरंजन के लिए
>
> &mdash; _[**“सिर्फ मनोरंजन के लिए: एक्सीडेंटल रिवोल्यूशनरी की कहानी”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

इस सूची का प्राथमिक लक्ष्य कुछ पागल उदाहरणों को इकट्ठा करना और यह बताना है कि यदि संभव हो तो वे कैसे काम करते हैं। सिर्फ इसलिए कि कुछ ऐसा सीखना मजेदार है जिसे हम पहले नहीं जानते थे।

यदि आप एक शुरुआती हैं, तो आप इन नोटों का उपयोग जावास्क्रिप्ट में गहरा गोता लगाने के लिए कर सकते हैं। मुझे उम्मीद है कि ये नोट्स आपको विनिर्देश पढ़ने में अधिक समय बिताने के लिए प्रेरित करेंगे।

यदि आप एक पेशेवर डेवलपर हैं, तो आप इन उदाहरणों पर सभी उद्धरणों और हमारे प्रिय जावास्क्रिप्ट के अप्रत्याशित किनारों के लिए एक महान संदर्भ के रूप में विचार कर सकते हैं।

किसी भी मामले में, बस इसे पढ़ें। आप शायद कुछ नया खोजने जा रहे हैं।

# ✍🏻 नोटेशन

**`// ->`** एक अभिव्यक्ति का परिणाम दिखाने के लिए प्रयोग किया जाता है. उदाहरण के लिए:

```js
1 + 1; // -> 2
```

**`// >`** का परिणाम है `console.log` या कोई अन्य आउटपुट। उदाहरण के लिए:

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** स्पष्टीकरण के लिए इस्तेमाल की जाने वाली टिप्पणी मात्र है। उदाहरण:

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 उदाहरण

## `[]` के बराबर`![]`

array समान नहीं है:

```js
[] == ![]; // -> true
```

### 💡 व्याख्या:

अमूर्त समानता ऑपरेटर उनकी तुलना करने के लिए दोनों पक्षों को संख्याओं में परिवर्तित करता है और दोनों पक्ष अलग-अलग कारणों से संख्या `0` बन जाते हैं। एरे सत्य हैं, इसलिए दाईं ओर, एक सत्य मूल्य के विपरीत `गलत` है, जो तब` 0` के लिए मजबूर है। बाईं ओर, हालांकि, एक खाली सरणी पहले एक बूलियन बनने के बिना एक संख्या के लिए मजबूर की जाती है, और खाली सरणियों को सत्य होने के बावजूद `0` के लिए मजबूर किया जाता है।

इस प्रकार यह अभिव्यक्ति सरल है:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

See also [`[]` is truthy, but not `true`](#-is-truthy-but-not-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` is not equal `![]`, but not equal `[]` too

Array बराबर नहीं है `true`, लेकिन Array बराबर नहीं है` true` भी नहीं;
Array बराबर है 'false', Array बराबर है 'false' भी:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 व्याख्या:

```js
true == []; // -> false
true == ![]; // -> false

// विनिर्देश के अनुसार

true == []; // -> false

toNumber(true); // -> 1
toNumber([]); // -> 0

1 == 0; // -> false

true == ![]; // -> false

![]; // -> false

true == false; // -> false
```

```js
false == []; // -> true
false == ![]; // -> true

// विनिर्देश के अनुसार

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> false

![]; // -> false

false == false; // -> true
```

- [**7.2.13** सार समानता](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true is false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 व्याख्या:

Consider this step-by-step:

```js
// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** सार समानता](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

यह जावास्क्रिप्ट में एक पुराने स्कूल का मजाक है, लेकिन फिर से बनाया गया है। यहाँ मूल एक है:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 व्याख्या:

अभिव्यक्ति का मूल्यांकन `'फू' + (+ 'बार') के रूप में किया जाता है, जो संख्या को नहीं करने के लिए` 'बार'` को परिवर्तित करता है।

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` is not a `NaN`

```js
NaN === NaN; // -> false
```

### 💡 व्याख्या:

विनिर्देश इस व्यवहार के पीछे तर्क को सख्ती से परिभाषित करता है:

> 1. If `Type(x)` is different from `Type(y)`, return **false**.
> 2. If `Type(x)` is Number, then
>    1. If `x` is **NaN**, return **false**.
>    2. If `y` is **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** सख्त समानता की तुलना](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

Following the definition of `NaN` from the IEEE:

> चार परस्पर अनन्य संबंध संभव हैं: से कम, बराबर, अधिक से अधिक, और अव्यवस्थित। आखिरी मामला तब उठता है जब कम से कम एक ऑपरेंड NaN होता है। प्रत्येक NaN अपने आप सहित हर चीज के साथ अनियंत्रित की तुलना करेगा।
>
> &mdash; [“IEEE754 NaN मानों के लिए झूठी वापसी करने वाली सभी तुलनाओं के लिए तर्क क्या है?”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## यह विफल है

आपको विश्वास नहीं होगा, लेकिन …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 व्याख्या:

प्रतीकों के उस द्रव्यमान को टुकड़ों में तोड़कर, हम देखते हैं कि निम्न पैटर्न अक्सर होता है:

```js
![] + []; // -> 'false'
![]; // -> false
```

इसलिए हम `[]` को `गलत` में जोड़ने का प्रयास करते हैं। लेकिन कई आंतरिक फ़ंक्शन कॉल के कारण (`बाइनरी + ऑपरेटर` ->` ToPrimitive` -> `[[DefaultValue]]`) हम एक स्ट्रिंग के लिए सही ऑपरेंड को परिवर्तित करते हैं:

```js
![] + [].toString(); // 'false'
```

एक स्ट्रिंग के रूप में एक सरणी के रूप में सोचकर हम इसके पहले चरित्र तक पहुंच सकते हैं `[0]`:

```js
"false"[0]; // -> 'f'
```

बाकी स्पष्ट है, लेकिन `i` मुश्किल है। `विफल 'में` i` स्ट्रिंग को उत्पन्न करके' 'falseundefined'` को पकड़ा जाता है और सूचकांक पर तत्व को पकड़ा जाता है `[' 10 ']`'

## `[]` is truthy, but not `true`

एक सरणी एक सत्य मूल्य है, हालांकि, यह `सत्य` के बराबर नहीं है।

```js
!![]       // -> true
[] == true // -> false
```

### 💡 व्याख्या:

यहाँ ECMA-262 विनिर्देश में संबंधित वर्गों के लिंक दिए गए हैं:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` is falsy, but not `false`

इस तथ्य के बावजूद कि `null` एक मिथ्या मूल्य है, यह` false` के बराबर नहीं है।

```js
!!null; // -> false
null == false; // -> false
```

इसी समय, अन्य झूठे मूल्य, जैसे `0` या` `` `` झूठ` के बराबर हैं।

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 व्याख्या:

विवरण पिछले उदाहरण के समान है। यहाँ इसी लिंक है:

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` is an object, but it is undefined

> ⚠️ यह ब्राउज़र API का हिस्सा है और यह Node.js वातावरण में काम नहीं करेगा⚠️

इस तथ्य के बावजूद कि `document.all` एक सरणी जैसी वस्तु है और यह पृष्ठ में DOM नोड्स तक पहुँच प्रदान करता है, यह` टाइपोफ` फ़ंक्शन को `अपरिभाषित` के रूप में प्रतिक्रिया देता है।

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

इसी समय, ` document.all`` अपरिभाषित ` के बराबर नहीं है।

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

But at the same time:

```js
document.all == null; // -> true
```

### 💡 व्याख्या:

> `document.all` विशेष रूप से IE के पुराने संस्करणों के साथ DOM तत्वों को एक्सेस करने का एक तरीका हुआ करता था। हालांकि यह कभी भी एक मानक नहीं रहा है, लेकिन इसका इस्तेमाल वृद्धावस्था के जेएस कोड में किया जाता था। जब मानक नए एपीआई (जैसे `document.getElementById`) के साथ आगे बढ़ा, तो यह एपीआई कॉल अप्रचलित हो गई और मानक समिति को तय करना था कि इसके साथ क्या करना है। इसके व्यापक उपयोग के कारण उन्होंने एपीआई रखने का फैसला किया, लेकिन जावास्क्रिप्ट विनिर्देश के विलफुल उल्लंघन का परिचय दिया।
> इसका उपयोग करने पर कारण `झूठ` का जवाब देता है [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) with `undefined` while `true` when using the [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) स्पष्ट रूप से अनुमति देता है कि विनिर्देश के विलफुल उल्लंघन के कारण है।
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) at YDKJS - Types & Grammar

## न्यूनतम मान शून्य से अधिक है

`Number.MIN_VALUE` सबसे छोटी संख्या है, जो शून्य से अधिक है:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 व्याख्या:

> ` नंबर .IN_VALUE`` 5e-324 ` है, यानी सबसे छोटी धनात्मक संख्या जिसे फ्लोट प्रिसिजन के भीतर दर्शाया जा सकता है, यानी कि आप शून्य के जितना करीब हो सकते हैं। यह सबसे अच्छे रिज़ॉल्यूशन को परिभाषित करता है जो तैरता है जो आपको दे सकता है
>
> अब कुल मिलाकर सबसे छोटा मूल्य है `नंबर.नैगेटिव_इनफिनिटी` हालांकि यह एक सख्त अर्थ में वास्तव में संख्यात्मक नहीं है।
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## फंक्शन कोई फंक्शन नहीं है

> ⚠️ V8 v5.5 या निम्न में मौजूद बग (Node.js <= 7)⚠️

आप सभी को पता है कि कष्टप्रद _undefined एक function_ नहीं है, लेकिन इस बारे में क्या?

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 व्याख्या:

यह स्पेसिफिकेशन का हिस्सा नहीं है। यह केवल एक बग है जिसे अब ठीक कर दिया गया है, इसलिए भविष्य में इसके साथ कोई समस्या नहीं होनी चाहिए।

## Adding arrays

यदि आप दो सरणियों को जोड़ने का प्रयास करते हैं तो क्या होगा?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 व्याख्या:

संघात होता है। चरण-दर-चरण, ऐसा दिखता है:

```js
[1, 2, 3] + [4, 5, 6];
// call toString()
[1, 2, 3].toString() + [4, 5, 6].toString();
// concatenation
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

## सरणी में अल्पविराम

आपने 4 खाली तत्वों के साथ एक सरणी बनाई है। सभी के बावजूद, आपको अल्पविराम के कारण तीन तत्वों के साथ एक सरणी मिलेगी:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 व्याख्या:

> **Trailing commas** (कभी-कभी "अंतिम कॉमा" कहा जाता है) जावास्क्रिप्ट कोड में नए तत्वों, मापदंडों या गुणों को जोड़ते समय उपयोगी हो सकता है। यदि आप एक नई संपत्ति जोड़ना चाहते हैं, तो आप बस पिछली पंक्ति को संशोधित किए बिना एक नई रेखा जोड़ सकते हैं यदि वह रेखा पहले से ही एक अल्पविराम का उपयोग करती है। इससे संस्करण-नियंत्रण अलग-अलग हो जाता है और एडिटिंग कोड कम परेशानी वाला हो सकता है।
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) at MDN

## ऐरे समानता एक राक्षस है

JS में Array समानता एक राक्षस है, जैसा कि आप नीचे देख सकते हैं:

```js
[] == ''   // -> true
[] == 0    // -> true
[''] == '' // -> true
[0] == 0   // -> true
[0] == ''  // -> false
[''] == 0  // -> true

[null] == ''      // true
[null] == 0       // true
[undefined] == '' // true
[undefined] == 0  // true

[[]] == 0  // true
[[]] == '' // true

[[[[[[]]]]]] == '' // true
[[[[[[]]]]]] == 0  // true

[[[[[[ null ]]]]]] == 0  // true
[[[[[[ null ]]]]]] == '' // true

[[[[[[ undefined ]]]]]] == 0  // true
[[[[[[ undefined ]]]]]] == '' // true
```

### 💡 व्याख्या:

आपको उपरोक्त उदाहरणों के लिए बहुत सावधानी से देखना चाहिए! व्यवहार अनुभाग में वर्णित है[**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) of the specification.

## `undefined` and `Number`

यदि हम `नंबर` कंस्ट्रक्टर में कोई तर्क नहीं देते हैं, तो हम` 0` प्राप्त करेंगे। मान 'अपरिभाषित' को औपचारिक तर्कों के लिए सौंपा गया है जब कोई वास्तविक तर्क नहीं हैं, तो आप उम्मीद कर सकते हैं कि बिना तर्क के `संख्या` अपने पैरामीटर के मान के रूप में`अपरिभाषित 'लेता है। हालाँकि, जब हम`अपरिभाषित` पास करते हैं, तो हम` NaN` प्राप्त करेंगे।

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 व्याख्या:

विनिर्देश के अनुसार:

1. यदि इस फ़ंक्शन के आह्वान पर कोई तर्क नहीं दिया गया, तो `n` को` + 0` होने दें।
2. और, चलो `n` हो? `ToNumber (मान)`।
3. `अपरिभाषित` के मामले में,`ToNumber (अपरिभाषित)`को` NaN` वापस करना चाहिए।

Here's the corresponding section:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` एक बुरा आदमी है

`parseInt` अपने quirks द्वारा प्रसिद्ध है:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 व्याख्या:** ऐसा इसलिए होता है क्योंकि `parseInt` चरित्र-दर-चरित्र को तब तक जारी रखेगा, जब तक कि वह एक चरित्र को हिट न कर दे, जो उसे पता नहीं है। `F` in` 'f * ck'` हेक्साडेसिमल अंक `15` है।

पूर्णांक के लिए `इन्फिनिटी` को पार्स करना कुछ…

```js
//
parseInt("Infinity", 10); // -> NaN
// ...
parseInt("Infinity", 18); // -> NaN...
parseInt("Infinity", 19); // -> 18
// ...
parseInt("Infinity", 23); // -> 18...
parseInt("Infinity", 24); // -> 151176378
// ...
parseInt("Infinity", 29); // -> 385849803
parseInt("Infinity", 30); // -> 13693557269
// ...
parseInt("Infinity", 34); // -> 28872273981
parseInt("Infinity", 35); // -> 1201203301724
parseInt("Infinity", 36); // -> 1461559270678...
parseInt("Infinity", 37); // -> NaN
```

Be careful with parsing `null` too:

```js
parseInt(null, 24); // -> 23
```

**💡 व्याख्या:**

> यह `null` को स्ट्रिंग` `null” ` में परिवर्तित कर रहा है और इसे परिवर्तित करने का प्रयास कर रहा है। 23 के माध्यम से मूलांक 0 के लिए, ऐसे कोई अंक नहीं हैं जो इसे रूपांतरित कर सकते हैं, इसलिए यह NaN लौटाता है। 24 में, 14 वें अक्षर `` एन '', को अंक प्रणाली में जोड़ा जाता है। 31 पर, 21 वें अक्षर `` यू '' को जोड़ा जाता है और पूरे स्ट्रिंग को डिकोड किया जा सकता है। 37 पर अब कोई वैध अंक सेट नहीं है जो उत्पन्न किया जा सकता है और  `NaN` को लौटा दिया जाता है।
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

अष्टक के बारे में मत भूलना:

```js
parseInt("06"); // 6
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5
```

**💡 व्याख्या:**यदि इनपुट स्ट्रिंग "0" से शुरू होती है, तो मूलांक आठ (अष्टक) या 10 (दशमलव) है। वास्तव में जो मूलांक चुना गया है वह कार्यान्वयन-निर्भर है। ECMAScript 5 निर्दिष्ट करता है कि 10 (दशमलव) का उपयोग किया जाता है, लेकिन सभी ब्राउज़र अभी तक इसका समर्थन नहीं करते हैं। इस कारण से `parseInt` का उपयोग करते समय हमेशा एक मूलांक निर्दिष्ट करें।

`parseInt` always convert input to string:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

फ़्लोटिंग पॉइंट मानों को पार्स करते समय सावधान रहें

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 व्याख्या:** `ParseInt` एक स्ट्रिंग तर्क लेता है और निर्दिष्ट मूलांक का पूर्णांक देता है। `ParseInt` भी स्ट्रिंग पैरामीटर में पहले गैर-अंक के बाद और सहित कुछ भी स्ट्रिप्स। `0.000001` को स्ट्रिंग में परिवर्तित किया जाता है `0.000001` और ` पार्सेइंट`` 0 ` देता है। जब `0.0000001` को एक स्ट्रिंग में परिवर्तित किया जाता है तो इसे`'1e-7' 'के रूप में माना जाता है और इसलिए`parseInt`` 1` देता है। `1 / 1999999` की व्याख्या` 5.00000250000125e-7` और `पार्सेइंट`` 5` के रूप में की जाती है।

## `सत्य` और` असत्य` के साथ गणित

चलो कुछ गणित करते हैं:

```js
true +
  true(
    // -> 2
    true + true
  ) *
    (true + true) -
  true; // -> 3
```

हममम ... 🤔

### 💡 व्याख्या:

हम मानों को 'संख्या' निर्माता के साथ संख्याओं में भिन्न कर सकते हैं। यह काफी स्पष्ट है कि ` सच`` 1 ` के लिए मजबूर किया जाएगा:

```js
Number(true); // -> 1
```

यूनीरी प्लस ऑपरेटर अपने मूल्य को एक संख्या में बदलने का प्रयास करता है। यह पूर्णांकों और फ़्लोट्स के स्ट्रिंग अभ्यावेदन को परिवर्तित कर सकता है, साथ ही साथ गैर-स्ट्रिंग मान `सत्य`,` असत्य`, और `अशक्त`। यदि यह किसी विशेष मूल्य को पार्स नहीं कर सकता है, तो यह `NaN` का मूल्यांकन करेगा। इसका मतलब है कि हम `सच` को` 1` आसान कर सकते हैं:

```js
+true; // -> 1
```

जब आप जोड़ या गुणा कर रहे होते हैं, तो `ToNumber` विधि लागू होती है। विनिर्देश के अनुसार, यह विधि वापस आती है:

> If `argument` is **true**, return **1**. If `argument` is **false**, return **+0**.

इसलिए हम बूलियन मूल्यों को नियमित संख्या के रूप में जोड़ सकते हैं और सही परिणाम प्राप्त कर सकते हैं।

संगत अनुभाग:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML टिप्पणियाँ जावास्क्रिप्ट में मान्य हैं

आप प्रभावित होंगे, लेकिन `<! -` (जिसे HTML टिप्पणी के रूप में जाना जाता है) जावास्क्रिप्ट में एक मान्य टिप्पणी है।

```js
// valid comment
<!-- valid comment too
```

### 💡 व्याख्या:

Impressed? HTML जैसी टिप्पणियों का उद्देश्य उन ब्राउज़रों को अनुमति देना था जो समझ में नहीं आते थे`<script>` सुंदर ढंग से नीचा दिखाने के लिए टैग। ये ब्राउज़र, उदा। नेटस्केप 1.x अब लोकप्रिय नहीं हैं। तो अब आपके स्क्रिप्ट टैग में HTML कमेंट्स डालने का कोई मतलब नहीं है।

चूंकि Node.js V8 इंजन पर आधारित है, इसलिए HTML- जैसी टिप्पणियां Node.js रनटाइम द्वारा भी समर्थित हैं। इसके अलावा, वे विनिर्देश का एक हिस्सा हैं:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` is ~~not~~ a number

Type of `NaN` is a `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 व्याख्या:

व्याख्याs of how `typeof` and `instanceof` operators work:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` and `null` are objects

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false
```

### 💡 व्याख्या:

विनिर्देशन के इस भाग में `टाइपोफ़ 'ऑपरेटर के व्यवहार को परिभाषित किया गया है:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

विनिर्देशन के अनुसार, `टाइपऑफ़` ऑपरेटर [तालिका 35:` टाइपोफ़ `ऑपरेटर परिणाम] (https://www.ecma-international.org/ecma-262/#table-35) के अनुसार एक स्ट्रिंग लौटाता है। `Null`, साधारण, मानक विदेशी और गैर-मानक विदेशी वस्तुओं के लिए, जो`[[कॉल]]`को लागू नहीं करते हैं, यह स्ट्रिंग` `ऑब्जेक्ट`` लौटाता है।

हालाँकि, आप `toString` विधि का उपयोग करके किसी ऑब्जेक्ट के प्रकार की जाँच कर सकते हैं।

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Magically increasing numbers

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 व्याख्या:

यह बाइनरी फ्लोटिंग-पॉइंट अंकगणित के लिए IEEE 754-2008 मानक के कारण होता है। इस पैमाने पर, यह निकटतम सम संख्या में गोल होता है। अधिक पढ़ें:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## Precision of `0.1 + 0.2`

A well-known joke. An addition of `0.1` and `0.2` is deadly precise:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 व्याख्या:

The answer for the [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) question on StackOverflow:

> आपके कार्यक्रम में स्थिरांक `0.2` और` 0.3` भी उनके वास्तविक मूल्यों के सन्निकटन होंगे। ऐसा होता है कि निकटतम `डबल` से` 0.2` तर्कसंगत संख्या `0.2` से बड़ा है, लेकिन निकटतम` डबल` से `0.3` तर्कसंगत संख्या` 0.3` से छोटा है। `0.1` और` 0.2` हवाओं का योग तर्कसंगत संख्या `0.3` से बड़ा है और इसलिए आपके कोड में निरंतरता से असहमत है।

यह समस्या इतनी ज्ञात है कि यहां तक ​​कि एक वेबसाइट भी है जिसका नाम [0.30000000000000004.com] (http://0.30000000000000004.com/) है। यह हर भाषा में होता है जो फ़्लोटिंग पॉइंट गणित का उपयोग करता है, न कि केवल जावास्क्रिप्ट।

## पैचिंग नंबर

आप रैपर ऑब्जेक्ट्स को `नंबर` या` स्ट्रिंग` जैसे तरीकों से जोड़ सकते हैं।

```js
Number.prototype.isOne = function() {
  return Number(this) === 1;
};

(1.0).isOne(); // -> true
(1).isOne(); // -> true
(2.0)
  .isOne()(
    // -> false
    7
  )
  .isOne(); // -> false
```

### 💡 व्याख्या:

जाहिर है, आप जावास्क्रिप्ट में किसी भी अन्य ऑब्जेक्ट की तरह `नंबर` ऑब्जेक्ट का विस्तार कर सकते हैं। हालाँकि, यह अनुशंसित नहीं है यदि परिभाषित पद्धति का व्यवहार विनिर्देश का हिस्सा नहीं है। यहाँ `नंबर` की संपत्तियों की सूची दी गई है:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparison of three numbers

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 व्याख्या:

इस तरह से काम क्यों करता है? खैर, समस्या एक अभिव्यक्ति के पहले भाग में है। यहां देखिए यह कैसे काम करता है:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

हम इसे ठीक कर सकते हैं _Greater than or equal operator (`>=`)_:

```js
3 > 2 >= 1; // true
```

विनिर्देश में रिलेशनल ऑपरेटरों के बारे में अधिक पढ़ें:

- [**12.10** संबंधपरक संकारक](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## मजेदार गणित

अक्सर जावास्क्रिप्ट में अंकगणितीय संचालन के परिणाम काफी अप्रत्याशित हो सकते हैं। इन उदाहरणों पर विचार करें:

```js
 3  - 1  // -> 2
 3  + 1  // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
[] + [] // -> ''
{} + [] // -> 0
[] + {} // -> '[object Object]'
{} + {} // -> '[object Object][object Object]'

'222' - -'111' // -> 333

[4] * [4]       // -> 16
[] * []         // -> 0
[4, 4] * [4, 4] // NaN
```

### 💡 व्याख्या:

पहले चार उदाहरणों में क्या हो रहा है? जावास्क्रिप्ट में अतिरिक्त समझने के लिए यहां एक छोटी तालिका दी गई है:

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

अन्य उदाहरणों के बारे में क्या? एक `ToPrimitive` और` ToString` तरीकों को इसके अलावा `[]` और `{} के लिए निहित किया जा रहा है। विनिर्देश में मूल्यांकन प्रक्रिया के बारे में और पढ़ें:

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## RegExps का जोड़

क्या आप जानते हैं कि आप इस तरह से नंबर जोड़ सकते हैं?

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 व्याख्या:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## स्ट्रिंग्स `स्ट्रिंग` के उदाहरण नहीं हैं

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 व्याख्या:

`स्ट्रिंग` कंस्ट्रक्टर एक स्ट्रिंग लौटाता है:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Let's try with a `new`:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

वस्तु? वह क्या है?

```js
new String("str"); // -> [String: 'str']
```

विनिर्देश में स्ट्रिंग निर्माता के बारे में अधिक जानकारी:

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## बैकटिक्स के साथ कॉलिंग फ़ंक्शन

आइए एक फ़ंक्शन की घोषणा करते हैं जो कंसोल में सभी पैराम्स को लॉग करता है:

```js
function f(...args) {
  return args;
}
```

कोई शक नहीं, आप जानते हैं कि आप इस फ़ंक्शन को इस तरह से कॉल कर सकते हैं:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

लेकिन क्या आप जानते हैं कि आप किसी भी फंक्शन को बैकटिक्स कह सकते हैं।

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 व्याख्या:

यदि आप _Tagged टेम्पलेट शाब्दिक_ से परिचित हैं, तो यह बिल्कुल भी जादू नहीं है। ऊपर दिए गए उदाहरण में, `f` फ़ंक्शन टेम्प्लेट शाब्दिक के लिए एक टैग है। टेम्प्लेट शाब्दिक से पहले टैग आपको फ़ंक्शन के साथ टेम्प्लेट शाब्दिकता को पार्स करने की अनुमति देता है। टैग फ़ंक्शन के पहले तर्क में स्ट्रिंग मानों की एक सरणी होती है। शेष तर्क भावों से संबंधित हैं। उदाहरण:

```js
function template(strings, ...keys) {
  // do something with strings and keys…
}
```

यह [जादू के पीछे] (http://mxstbr.blog/2016/11/styled-compenders-magic-explained/) प्रसिद्ध पुस्तकालय जिसे [led स्टाइल-कंपोनेंट्स] कहा जाता है (https://www.styled-compenders.com) /), जो प्रतिक्रिया समुदाय में लोकप्रिय है।

विनिर्देशन के लिए लिंक:

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## पुकार पुकार पुकार

> Found by [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 व्याख्या:

ध्यान दें, यह आपके दिमाग को तोड़ सकता है! अपने सिर में इस कोड को पुन: उत्पन्न करने का प्रयास करें: हम `लागू` विधि का उपयोग करके` कॉल` विधि लागू कर रहे हैं। अधिक पढ़ें:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## A `constructor` property

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 व्याख्या:

आइए इस उदाहरण पर विचार करें चरण-दर-चरण:

```js
// Declare a new constant which is a string 'constructor'
const c = "constructor";

// c is a string
c; // -> 'constructor'

// Getting a constructor of string
c[c]; // -> [Function: String]

// Getting a constructor of constructor
c[c][c]; // -> [Function: Function]

// Call the Function constructor and pass
// the body of new function as an argument
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// And then call this anonymous function
// The result is console-logging a string 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?
```

एक `Object.prototyp.constructor` उदाहरण ऑब्जेक्ट बनाने वाले` Object` कंस्ट्रक्टर फ़ंक्शन का संदर्भ देता है। स्ट्रिंग के साथ मामले में यह `स्ट्रिंग` है, संख्या के मामले में यह` नंबर` और इसी तरह है।

- एमडीएन के लिए [`Object.prototyp.constructor`] (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [** 19.1.3.1 ** Object.prototype.constructor] (https://www.ecma-international.org/ecma-262/#sec-object.prototyp.constructor)

## वस्तु की संपत्ति की कुंजी के रूप में वस्तु

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 व्याख्या:

यह काम क्यों करता है? यहां हम एक _Computed संपत्ति name_ का उपयोग कर रहे हैं। जब आप उन कोष्ठकों के बीच एक वस्तु को पास करते हैं, तो यह एक स्ट्रिंग के लिए आपत्ति करता है, इसलिए हमें संपत्ति कुंजी `'[ऑब्जेक्ट ऑब्जेक्ट]` `और मूल्य` {} `मिलता है।

हम इस तरह "कोष्ठक नरक" बना सकते हैं:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

वस्तु शाब्दिक के बारे में यहाँ और अधिक पढ़ें:

- एमडीएन पर (ऑब्जेक्ट इनिशलाइज़र] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Oference/Object_initializer)
- [** १२.२.६ ** वस्तु इनिशियलाइज़र] (http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## प्रोटोटाइपिंग को `__proto__` के साथ एक्सेस करना

जैसा कि हम जानते हैं, आदिमों के प्रोटोटाइप नहीं हैं। हालांकि, अगर हम आदिम के लिए `__proto__` का मान प्राप्त करने का प्रयास करते हैं, तो हमें यह मिलेगा:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 व्याख्या:

ऐसा इसलिए होता है क्योंकि जब किसी चीज़ का प्रोटोटाइप नहीं होता है, तो इसे `ToObject` मेथड का इस्तेमाल करके रैपर ऑब्जेक्ट में लपेट दिया जाएगा। तो, चरण-दर-चरण:

```js
(1)
  .__proto__(
    // -> [Number: 0]
    1
  )
  .__proto__.__proto__(
    // -> {}
    1
  ).__proto__.__proto__.__proto__; // -> null
```

यहाँ `__proto__` के बारे में अधिक जानकारी है:

- [** B.2.2.1 ** Object.prototype। ** proto **] (https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [** 7.1.13 ** ToObject (`तर्क`)] (https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `$ {{वस्तु}}` ``

नीचे दिए गए अभिव्यक्ति का परिणाम क्या है?

```js
`${{ Object }}`;
```

The answer is:

```js
// -> '[object Object]'
```

### 💡 व्याख्या:

हमने एक ऑब्जेक्ट को एक संपत्ति के साथ परिभाषित किया है `Object` का उपयोग करके _Shorthand संपत्ति अंकन_:

`` `Js { वस्तु वस्तु; } `` `

फिर हमने इस ऑब्जेक्ट को टेम्पलेट शाब्दिक में पास कर दिया है, इसलिए उस ऑब्जेक्ट के लिए `toString` विधि कॉल करता है। इसलिए हमें स्ट्रिंग मिलती है `'[ऑब्जेक्ट ऑब्जेक्ट]'`।

- [** १२.२.९ ** टेम्पलेट साहित्य] (https://www.ecma-international.org/ecma-262/#sec-template-literals)
- एमडीएन पर (ऑब्जेक्ट इनिशलाइज़र] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Oference/Object_initializer)

## डिफ़ॉल्ट मानों के साथ विनाशकारी

इस उदाहरण पर विचार करें:

```js
let x,
  { x: y = 1 } = { x };
y;
```

उपरोक्त उदाहरण एक साक्षात्कार के लिए एक महान कार्य है। `Y` का मूल्य क्या है? उत्तर है:

```js
// -> 1
```

### 💡 व्याख्या:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

ऊपर के उदाहरण के साथ:

1. हम `x` को बिना किसी मूल्य के घोषित करते हैं, इसलिए यह` अपरिभाषित` है।
2. फिर हम `x` का मान ऑब्जेक्ट प्रॉपर्टी` x` में पैक करते हैं।
3. फिर हम विध्वंस का उपयोग करके `x` का मान निकालते हैं और` y` को असाइन करना चाहते हैं। यदि मान परिभाषित नहीं है, तो हम डिफ़ॉल्ट मान के रूप में `1` का उपयोग करने जा रहे हैं।
4. `y` का मान लौटाएँ।

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## डॉट्स और फैल रहा है

ऐरे के प्रसार के साथ दिलचस्प उदाहरणों की रचना की जा सकती है। इस पर विचार करो:

```js
[...[..."..."]].length; // -> 3
```

### 💡 व्याख्या:

क्यों `3`? जब हम [स्प्रेड ऑपरेटर] (http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer) का उपयोग करते हैं, तो '@@ इट्रेटर' विधि को कहा जाता है, और लौटा हुआ पुनरावृत्ति है मूल्यों को पुनरावृत्त करने के लिए उपयोग किया जाता है। स्ट्रिंग के लिए डिफ़ॉल्ट पुनरावृत्ति एक स्ट्रिंग को वर्णों में फैलाता है। फैलने के बाद, हम इन पात्रों को एक सरणी में पैक करते हैं। फिर हम इस सरणी को फिर से फैलाते हैं और इसे वापस सरणी में पैक करते हैं।

A `'...'` स्ट्रिंग में तीन ``वर्ण होते हैं, इसलिए परिणामी सरणी की लंबाई`3` है।

अब, चरण-दर-चरण:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

जाहिर है, हम सरणी के तत्वों को जितनी बार चाहें उतनी बार फैला और लपेट सकते हैं:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## लेबल

कई प्रोग्रामर जावास्क्रिप्ट में लेबल के बारे में नहीं जानते हैं। वे दिलचस्प हैं:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 व्याख्या:

लेबल स्टेटमेंट का उपयोग `ब्रेक` या` जारी` स्टेटमेंट के साथ किया जाता है। आप लूप की पहचान करने के लिए एक लेबल का उपयोग कर सकते हैं, और फिर प्रोग्राम को लूप को बाधित करना चाहिए या इसके निष्पादन को जारी रखने के लिए `ब्रेक` या` जारी` बयान का उपयोग करें।

ऊपर दिए गए उदाहरण में, हम एक लेबल `foo` की पहचान करते हैं। उसके बाद `कंसोल.लॉग ('पहले');` निष्पादित होता है और फिर हम निष्पादन को बाधित करते हैं।

जावास्क्रिप्ट में लेबल के बारे में और पढ़ें:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Nested labels

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 व्याख्या:

पिछले उदाहरणों के समान, इन लिंक का अनुसरण करें:

- [** १२.१६ ** कोमा संचालक (`,`)] (https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [** 13.13 ** लेबल किए गए विवरण] (https://tc39.github.io/ecma262/#sec-labelled-statements)
- [लेबल किए गए कथन] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) MDN पर

## कपटी `कोशिश..चेक`

यह अभिव्यक्ति क्या लौटेगी? `2` या` 3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

उत्तर `3` है। आश्चर्य चकित?

### # व्याख्या:

- [** 13.15 ** द `कोशिश` स्टेटमेंट] (https://www.ecma-international.org/ecma-262/#sec-try-statement)

## क्या यह कई विरासत है?

नीचे दिए गए उदाहरण पर एक नज़र डालें:

```js
new class F extends (String, Array) {}(); // -> F []
```

क्या यह एक बहु विरासत है? नहीं।

### # व्याख्या:

दिलचस्प हिस्सा `फैली` खंड (`(स्ट्रिंग, सरणी)` का मूल्य है। ग्रुपिंग ऑपरेटर हमेशा अपना अंतिम तर्क देता है, इसलिए `(स्ट्रिंग, एरे)` वास्तव में सिर्फ `एरे` है। इसका मतलब है कि हमने सिर्फ एक वर्ग बनाया है जो `एरे` का विस्तार करता है।

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## एक जनरेटर जो खुद उपजता है

एक जनरेटर के इस उदाहरण पर विचार करें जो स्वयं उपज देता है:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

जैसा कि आप देख सकते हैं, लौटाया गया मान एक वस्तु है जिसका ` मान`` एफ ` के बराबर है। उस मामले में, हम ऐसा कुछ कर सकते हैं:

```js
(function* f() {
  yield f;
})()
  .next()
  .value()
  .next()(
    // -> { value: [GeneratorFunction: f], done: false }

    // and again
    function* f() {
      yield f;
    }
  )()
  .next()
  .value()
  .next()
  .value()
  .next()(
    // -> { value: [GeneratorFunction: f], done: false }

    // and again
    function* f() {
      yield f;
    }
  )()
  .next()
  .value()
  .next()
  .value()
  .next()
  .value()
  .next();
// -> { value: [GeneratorFunction: f], done: false }

// and so on
// …
```

### 💡 व्याख्या:

यह समझने के लिए कि यह इस तरह क्यों काम करता है, विनिर्देश के इन वर्गों को पढ़ें:

- [** २५ ** नियंत्रण अमूर्त वस्तुएं] (https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [** २५.३ ** जेनरेटर ऑब्जेक्ट] (https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## कक्षा का एक वर्ग

इस ओफ़्सेटेड सिंटैक्स प्लेइंग पर विचार करें:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

ऐसा लगता है जैसे हम क्लास के अंदर क्लास घोषित कर रहे हैं। एक त्रुटि होनी चाहिए, हालांकि, हमें स्ट्रिंग '' ऑब्जेक्ट '' मिलता है।

### # व्याख्या:

ECMAScript 5 युग के बाद से _keywords_ को _property names_ के रूप में अनुमति दी गई है। तो इस सरल वस्तु उदाहरण के रूप में इसके बारे में सोचो:

```js
const foo = {
  class: function() {}
};
```

और ईएस 6 मानकीकृत शॉर्टहैंड विधि परिभाषाएं। साथ ही, कक्षाएं अनाम हो सकती हैं। इसलिए यदि हम ड्रॉप करते हैं `: फ़ंक्शन` भाग, हम प्राप्त करने जा रहे हैं:

```js
class {
  class() {}
}
```

डिफ़ॉल्ट वर्ग का परिणाम हमेशा एक साधारण वस्तु होती है। और इसके टाइपोफ को `ऑब्जेक्ट'` वापस करना चाहिए।

यहाँ और पढ़ें:

- [** १४.३ ** विधि परिभाषाएँ] (https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [** १४.५ ** कक्षा परिभाषाएँ] (https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## गैर-सहकर्मी वस्तुएं

प्रसिद्ध प्रतीकों के साथ, प्रकार की जबरदस्ती से छुटकारा पाने का एक तरीका है। जरा देखो तो:

```js
function nonCoercible(val) {
  if (val == null) {
    throw TypeError("nonCoercible should not be called with null or undefined");
  }

  const res = Object(val);

  res[Symbol.toPrimitive] = () => {
    throw TypeError("Trying to coerce non-coercible object");
  };

  return res;
}
```

अब हम इसका उपयोग इस तरह कर सकते हैं:

```js
// objects
const foo = nonCoercible({ foo: "foo" });

foo * 10; // -> TypeError: Trying to coerce non-coercible object
foo + "evil"; // -> TypeError: Trying to coerce non-coercible object

// strings
const bar = nonCoercible("bar");

bar + "1"; // -> TypeError: Trying to coerce non-coercible object
bar.toString() + 1; // -> bar1
bar === "bar"; // -> false
bar.toString() === "bar"; // -> true
bar == "bar"; // -> TypeError: Trying to coerce non-coercible object

// numbers
const baz = nonCoercible(1);

baz == 1; // -> TypeError: Trying to coerce non-coercible object
baz === 1; // -> false
baz.valueOf() === 1; // -> true
```

### 💡 व्याख्या:

- [सेर्गेई रुबनोव द्वारा एक तस्वीर] (https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [** ६.१.५.१ ** अच्छी तरह से ज्ञात प्रतीक] (https://www.ecma-international.org/ecma-262/#sec-well-ogn-symbols)

## मुश्किल तीर कार्य

नीचे दिए गए उदाहरण पर विचार करें:

```js
let f = () => 10;
f(); // -> 10
```

ठीक है, ठीक है, लेकिन इस बारे में क्या:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 व्याख्या:

आप `अपरिभाषित` के बजाय`{}`की उम्मीद कर सकते हैं। ऐसा इसलिए है क्योंकि घुंघराले ब्रेसिज़ तीर फ़ंक्शन के सिंटैक्स का हिस्सा हैं, इसलिए `f` अपरिभाषित वापस आ जाएगा। हालांकि, ब्रैकेट के साथ रिटर्न वैल्यू को संलग्न करके, तीर फ़ंक्शन से सीधे `{}` ऑब्जेक्ट को वापस करना संभव है।

```js
let f = () => ({});
f(); // -> {}
```

## एरो फ़ंक्शंस एक निर्माता नहीं हो सकता है

नीचे दिए गए उदाहरण पर विचार करें:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

अब, एक तीर फ़ंक्शन के साथ ऐसा करने का प्रयास करें:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 व्याख्या:

एरो फ़ंक्शंस को कंस्ट्रक्टर के रूप में इस्तेमाल नहीं किया जा सकता है और नए के साथ उपयोग किए जाने पर एक त्रुटि होगी। क्योंकि एक शाब्दिक `यह` है, और एक` प्रोटोटाइप` संपत्ति नहीं है, इसलिए यह बहुत मतलब नहीं होगा।

## `तर्क` और तीर कार्य

नीचे दिए गए उदाहरण पर विचार करें:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

अब, एक तीर फ़ंक्शन के साथ ऐसा करने का प्रयास करें:

`` `Js let f = () => तर्क; च ( "एक"); // -> अनट्रेक्टेड रेफरेंस: तर्क को परिभाषित नहीं किया गया है `` `

### # व्याख्या:

एरो फ़ंक्शंस शॉर्ट और लेक्सिकल `this` होने पर ध्यान देने के साथ नियमित फ़ंक्शंस का एक हल्का संस्करण है। उसी समय एरो फ़ंक्शंस `आर्ग्यूमेंट्स` ऑब्जेक्ट के लिए बाइंडिंग प्रदान नहीं करते हैं। एक वैध विकल्प के रूप में एक ही परिणाम प्राप्त करने के लिए `बाकी मापदंडों` का उपयोग करें:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## मुश्किल वापसी

`वापसी` बयान भी मुश्किल है। इस पर विचार करो:

```js
(function() {
  return
  {
    b: 10;
  }
})(); // -> undefined
```

### 💡 व्याख्या:

`वापसी` और लौटी हुई अभिव्यक्ति एक ही पंक्ति में होनी चाहिए:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

यह एक अवधारणा के कारण है जिसे स्वचालित अर्धविराम सम्मिलन कहा जाता है, जो स्वचालित रूप से अधिकांश न्यूक्लियर के बाद अर्धविराम सम्मिलित करता है। पहले उदाहरण में, `रिटर्न` स्टेटमेंट और ऑब्जेक्ट शाब्दिक के बीच एक अर्धविराम डाला जाता है, इसलिए फ़ंक्शन` अपरिभाषित` देता है और ऑब्जेक्ट शाब्दिक का कभी मूल्यांकन नहीं किया जाता है।

- [** 11.9.1 ** स्वचालित अर्धविराम सम्मिलन के नियम] (https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [** 13.10 ** द `रिटर्न` स्टेटमेंट] (https://www.ecma-international.org/ecma-262/#sec-return-statement)

## ऑब्जेक्ट पर कार्य असाइन करना

```js
var foo = {n: 1};
var bar = foo;

foo.x = foo = {n: 2};

foo.x // -> undefined
foo   // -> {n: 2}
bar   // -> {n: 1, x: {n: 2}}
```

दाएं से बाएं, `{n: 2}` को फू को सौंपा गया है, और इस असाइनमेंट का परिणाम `{n: 2}` को foo.x को सौंपा गया है, इसीलिए बार `{n: 1, x: {है n: 2}} `के रूप में बार फू के लिए एक संदर्भ है। लेकिन क्यों foo.x अपरिभाषित है जबकि bar.x नहीं है?

### 💡 व्याख्या:

फू और बार एक ही ऑब्जेक्ट को संदर्भित करते हैं `{n: 1}`, और लवलीन को असाइनमेंट से पहले हल किया जाता है। `foo = {n: 2}` एक नई वस्तु बना रहा है, और इसलिए उस नई वस्तु को संदर्भित करने के लिए foo अपडेट किया गया है। यहाँ चाल को 'foo.x = ...' में foo किया गया है क्योंकि एक लैवल्यू को पहले से हल किया गया था और अभी भी पुराने `foo = {n: 1}` ऑब्जेक्ट को संदर्भित करता है और इसे x मान जोड़कर अपडेट करें। उस श्रृंखला असाइनमेंट के बाद, बार अभी भी पुराने फू ऑब्जेक्ट को संदर्भित करता है, लेकिन फू नए `{n: 2}` ऑब्जेक्ट को संदर्भित करता है, जहां एक्स मौजूद नहीं है।

यह इसके बराबर है:

```js
var foo = {n: 1};
var bar = foo;

foo = {n: 2} // -> {n: 2}
bar.x = foo // -> {n: 1, x: {n: 2}}
// bar.x point to the address of the new foo object
// it's not equivalent to: bar.x = {n: 2}
```

## सरणियों के साथ ऑब्जेक्ट गुण तक पहुँचना

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

छद्म बहुआयामी सरणियों के बारे में क्या?

```js
var map = {};
var x = 1;
var y = 2;
var z = 3;

map[[x, y, z]] = true;
map[[x + 10, y, z]] = true;

map["1,2,3"]; // -> true
map["11,2,3"]; // -> true
```

### 💡 व्याख्या:

कोष्ठक `[]` परिचालक उत्तीर्ण अभिव्यक्ति को `स्ट्रींग` का उपयोग करके परिवर्तित करता है। स्ट्रिंग में एक तत्व तत्व को परिवर्तित करना स्ट्रिंग में निहित तत्व को परिवर्तित करने के लिए एक समान है:

```js
["property"].toString(); // -> 'property'
```

## Null and Relational Operators

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 व्याख्या:

लंबी कहानी छोटी, यदि ` शून्य`` 0 ` से कम है, तो `झूठा` है, तो` शून्य` = 0` `सत्य` है। इसके लिए [यहाँ] (https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274) की गहन व्याख्या पढ़ें।

## `Number.toFixed ()` विभिन्न संख्याएँ प्रदर्शित करता है

`Number.toFixed ()` विभिन्न ब्राउज़रों में थोड़ा अजीब व्यवहार कर सकता है। इस उदाहरण को देखें:

```js
(0.7875).toFixed(3);
// Firefox: -> 0.787
// Chrome: -> 0.787
// IE11: -> 0.788
(0.7876).toFixed(3);
// Firefox: -> 0.788
// Chrome: -> 0.788
// IE11: -> 0.788
```

### 💡 व्याख्या:

हालांकि आपकी पहली वृत्ति यह हो सकती है कि IE11 सही है और फ़ायरफ़ॉक्स / क्रोम गलत है, वास्तविकता यह है कि फ़ायरफ़ॉक्स / क्रोम अधिक सीधे संख्याओं के लिए मानक मान रहे हैं (IEEE-754 फ़्लोटिंग पॉइंट), जबकि IE11 उन्हें पूरी तरह से अवज्ञा करता है (जो शायद है ) स्पष्ट परिणाम देने का प्रयास।

आप देख सकते हैं कि कुछ त्वरित परीक्षणों के साथ ऐसा क्यों होता है:

```js
// 5 नीचे गोलाई के विषम परिणाम की पुष्टि करें
(0.7875).toFixed(3); // -> 0.787
// It looks like it's just a 5 when you expand to the
// limits of 64-bit (double-precision) float accuracy
(0.7875).toFixed(14); // -> 0.78750000000000
// But what if you go beyond the limit?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

फ़्लोटिंग पॉइंट नंबरों को आंतरिक रूप से दशमलव अंकों की एक सूची के रूप में संग्रहीत नहीं किया जाता है, लेकिन एक अधिक जटिल कार्यप्रणाली के माध्यम से जो छोटी अशुद्धि पैदा करता है जो आमतौर पर स्ट्रींग और इसी तरह की कॉल से गोल होते हैं, लेकिन वास्तव में आंतरिक रूप से मौजूद होते हैं।

इस मामले में, कि अंत में "5" वास्तव में एक सच के नीचे एक बहुत छोटा सा अंश था। किसी भी उचित लंबाई पर इसे 5 के रूप में प्रस्तुत करना ... लेकिन यह वास्तव में आंतरिक रूप से 5 नहीं है।

IE11, हालांकि, केवल (शून्य) मामले में भी अंत तक संलग्न शून्य के साथ मूल्य इनपुट की रिपोर्ट करेगा, क्योंकि यह हार्डवेयर सीमाओं से परेशानियों को कम करने के लिए मूल्य को जबरन गोल करना प्रतीत होता है।

संदर्भ के लिए देखें `नोट 2` ECMA-262 पर` toFixed` के लिए परिभाषा।

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` less than `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 व्याख्या:

- चार्ली हार्वे द्वारा Math.max () Math.min () से कम क्यों है? (Https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min)

## तुलना `null` से` 0` तक

निम्नलिखित अभिव्यक्तियाँ विरोधाभास का परिचय देती हैं:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

`Null` न तो बराबर हो सकता है और न ही` 0` से अधिक, अगर `null> = 0` वास्तव में` true` है? (यह भी उसी तरह से कम के साथ काम करता है।)

### 💡 व्याख्या:

जिस तरह से इन तीनों भावों का मूल्यांकन किया जाता है, वे सभी भिन्न हैं और इस अप्रत्याशित व्यवहार के उत्पादन के लिए जिम्मेदार हैं।

सबसे पहले, अमूर्त समानता तुलना `null == 0`। आम तौर पर, यदि यह ऑपरेटर दोनों तरफ के मूल्यों की ठीक से तुलना नहीं कर सकता है, तो यह दोनों संख्याओं में परिवर्तित हो जाता है और संख्याओं की तुलना करता है। फिर, आप निम्न व्यवहार की अपेक्षा कर सकते हैं:

```js
// This is not what happens
(null == 0 + null) == +0;
0 == 0;
true;
```

हालांकि, कल्पना के एक करीबी पढ़ने के अनुसार, संख्या रूपांतरण वास्तव में उस तरफ नहीं होता है जो `अशक्त` या` अपरिभाषित` है। इसलिए, यदि आपके पास समान चिह्न के एक तरफ `null` है, तो दूसरी तरफ` true` वापस करने के लिए अभिव्यक्ति के लिए `null` या` अनिर्धारित` होना चाहिए। चूंकि यह मामला नहीं है, `झूठ` वापस आ गया है।

अगला, संबंधपरक तुलना `अशक्त> 0`। एल्गोरिथ्म यहाँ, अमूर्त समानता ऑपरेटर के विपरीत, _will_ एक संख्या के लिए `null` कन्वर्ट। इसलिए, हमें यह व्यवहार मिलता है:

```js
null > 0
+null = +0
0 > 0
false
```

अंत में, संबंधपरक तुलना `शून्य> = 0`। आप तर्क दे सकते हैं कि यह अभिव्यक्ति `शून्य> 0 का परिणाम होना चाहिए null == 0`; अगर ऐसा होता, तो उपरोक्त परिणामों का मतलब यह होगा कि यह भी `गलत` होगा। हालांकि, वास्तव में `> =` ऑपरेटर बहुत अलग तरीके से काम करता है, जो मूल रूप से `<` ऑपरेटर के विपरीत लेना है। क्योंकि ऊपर से ऑपरेटर से अधिक के साथ हमारा उदाहरण भी ऑपरेटर से कम के लिए है, इसका मतलब है कि इस अभिव्यक्ति का वास्तव में मूल्यांकन किया जाता है:

```js
null >= 0;
!(null < 0);
!(+null < +0);
!(0 < 0);
!false;
true;
```

- [**7.2.12** Abstract Relational Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## समान परिवर्तनशील पुनर्वितरण

JS चरों को फिर से दिखाने की अनुमति देता है:

```js
a;
a;
// यह भी मान्य है
a, a;
```

सख्त मोड में भी काम करता है:

```js
var a, a, a;
var a;
var a;
```

### 💡 व्याख्या:

सभी परिभाषाओं को एक परिभाषा में मिला दिया गया है।

- [** 13.3.2 ** चर कथन] (https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## डिफ़ॉल्ट व्यवहार Array.prototyp.sort ()

कल्पना करें कि आपको संख्याओं की एक संख्या को क्रमबद्ध करना होगा।

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 व्याख्या:

डिफ़ॉल्ट सॉर्ट ऑर्डर तत्वों को स्ट्रिंग्स में परिवर्तित करने पर बनाया गया है, फिर UTF-16 कोड इकाइयों के उनके अनुक्रमों की तुलना करते हैं।

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### संकेत

यदि आप कुछ भी लेकिन स्ट्रिंग को क्रमबद्ध करने की कोशिश करते हैं, तो 'तुलना' पास करें।

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

# 📚 अन्य संसाधन

- [wtfjs.com] (http://wtfjs.com/) - वेब की भाषा के लिए उन विशेष अनियमितताओं, विसंगतियों और सीधे सादे दर्दभरे क्षणों का एक संग्रह।
- [वट] (https://www.destroyallsoftware.com/talks/wat) - कोडमश 2012 से गैरी बर्नहार्ट द्वारा एक बिजली की बात
- [क्या ... जावास्क्रिप्ट?] (Https://www.youtube.com/watch?v=2pL28CcEijU) - काइल सिम्पसन फॉरवर्ड 2 के लिए जावास्क्रिप्ट से "पागल को बाहर निकालने" का प्रयास करते हैं। वह क्लीनर, अधिक सुरुचिपूर्ण, अधिक पठनीय कोड बनाने में आपकी सहायता करना चाहता है, फिर लोगों को खुले स्रोत समुदाय में योगदान करने के लिए प्रेरित करता है।

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
