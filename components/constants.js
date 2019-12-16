export const defaultValue = [
    {
        "data": [
            {
                "name": "备注",
                "rules": [
                    {
                        "unit": "ansi",
                        "valueIntervalInclude": true,
                        "name": "maxLengthRule",
                        "exProperty": "include",
                        "value": "128"
                    }
                ],
                "subType": "INPUT",
                "whole": false,
                "id": "remark",
                "type": "INPUT"
            }
        ],
        "name": "快麦属性",
        "id": "idptBasicInfo"
    },
    {
        "data": [
            {
                "name": "发布货号",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "TEXT",
                "whole": false,
                "id": "prop_13021751",
                "type": "INPUT"
            },
            {
                "name": "发布类型",
                "optionList": [
                    {
                        "label": "一口价",
                        "value": "b"
                    }
                ],
                "defaultValues": "b",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "RADIO",
                "whole": false,
                "id": "item_type",
                "type": "SINGLECHECK"
            },
            {
                "name": "品牌",
                "optionList": [
                    {
                        "label": "mosupoo/陌速",
                        "value": "1878087115"
                    }
                ],
                "defaultValues": "1878087115",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_20000",
                "type": "SINGLECHECK"
            },
            {
                "name": "是否新品",
                "optionList": [
                    {
                        "label": "否",
                        "value": "false"
                    },
                    {
                        "label": "是",
                        "value": "true"
                    }
                ],
                "defaultValues": "true",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "<a target='_blank' class='wanxiang-knowledge' data-knowledge='13128397' href='//rule.tmall.com/tdetail-629.htm'>[新品打标逻辑]</a><a target='_blank' class='wanxiang-knowledge' data-knowledge='13129610' href='https://maowo.tmall.com/discussion.htm?spm=a2227.7147689.0.0.OZJ6w5&id=45452&circleId=45'>&nbsp;&nbsp;&nbsp;&nbsp;[新品打标结果查询]</a>"
                    }
                ],
                "subType": "RADIO",
                "tip": "[\"新品查询工具：//sell.tmall.com/auction/tools/xinpin.htm\"]",
                "whole": false,
                "id": "is_xinpin",
                "type": "SINGLECHECK"
            },
            {
                "name": "上市年份季节",
                "optionList": [
                    {
                        "label": "2020年秋季",
                        "value": "1930932758"
                    },
                    {
                        "label": "2020年春季",
                        "value": "1767432777"
                    },
                    {
                        "label": "2020年夏季",
                        "value": "828918270"
                    },
                    {
                        "label": "2020年冬季",
                        "value": "1931065005"
                    },
                    {
                        "label": "2019年秋季",
                        "value": "1930889840"
                    },
                    {
                        "label": "2019年春季",
                        "value": "1767451285"
                    },
                    {
                        "label": "2019年夏季",
                        "value": "828896460"
                    },
                    {
                        "label": "2019年冬季",
                        "value": "1930994249"
                    },
                    {
                        "label": "2018年秋季",
                        "value": "1586027483"
                    },
                    {
                        "label": "2018年春季",
                        "value": "1586070154"
                    },
                    {
                        "label": "2018年夏季",
                        "value": "828880787"
                    },
                    {
                        "label": "2018年冬季",
                        "value": "556502669"
                    },
                    {
                        "label": "2017年秋季",
                        "value": "728066917"
                    },
                    {
                        "label": "2017年春季",
                        "value": "1375048537"
                    },
                    {
                        "label": "2017年夏季",
                        "value": "828896582"
                    },
                    {
                        "label": "2017年冬季",
                        "value": "740150614"
                    },
                    {
                        "label": "2016年秋季",
                        "value": "728146012"
                    },
                    {
                        "label": "2016年春季",
                        "value": "854168429"
                    },
                    {
                        "label": "2016年夏季",
                        "value": "828914351"
                    },
                    {
                        "label": "2016年冬季",
                        "value": "740138901"
                    },
                    {
                        "label": "2015年秋季",
                        "value": "715192583"
                    },
                    {
                        "label": "2015年春季",
                        "value": "379874864"
                    },
                    {
                        "label": "2015年夏季",
                        "value": "647672577"
                    },
                    {
                        "label": "2015年冬季",
                        "value": "740132938"
                    },
                    {
                        "label": "2014年秋季",
                        "value": "380120406"
                    },
                    {
                        "label": "2014年春季",
                        "value": "379930774"
                    },
                    {
                        "label": "2014年夏季",
                        "value": "379818839"
                    },
                    {
                        "label": "2014年冬季",
                        "value": "379886796"
                    },
                    {
                        "label": "2013年秋季",
                        "value": "209928864"
                    },
                    {
                        "label": "2013年春季",
                        "value": "199870733"
                    },
                    {
                        "label": "2013年夏季",
                        "value": "186026840"
                    },
                    {
                        "label": "2013年冬季",
                        "value": "209928863"
                    },
                    {
                        "label": "2012年秋季",
                        "value": "132721317"
                    },
                    {
                        "label": "2012年春季",
                        "value": "132721270"
                    },
                    {
                        "label": "2012年夏季",
                        "value": "132721297"
                    },
                    {
                        "label": "2012年冬季",
                        "value": "132721335"
                    },
                    {
                        "label": "2011年",
                        "value": "10285019"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216347",
                "type": "SINGLECHECK"
            },
            {
                "name": "品牌类型",
                "optionList": [
                    {
                        "label": "国际大牌",
                        "value": "7366061"
                    },
                    {
                        "label": "时尚潮牌",
                        "value": "20307554"
                    },
                    {
                        "label": "设计师品牌",
                        "value": "4241910"
                    },
                    {
                        "label": "国内非知名品牌",
                        "value": "92349624"
                    },
                    {
                        "label": "国内知名品牌",
                        "value": "4380431"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_42860829",
                "type": "SINGLECHECK"
            },
            {
                "name": "材质成分",
                "rules": [
                    {
                        "valueIntervalInclude": true,
                        "name": "maxInputNumRule",
                        "exProperty": "include",
                        "value": "5"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "MULTICOMPLEX",
                "tip": "[\"如存在多种材质（材质面积大于15%）或面料里料填充物等材质不一致，请在详情页做详细描述\"]",
                "whole": true,
                "id": "material_prop_149422948",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "材质",
                        "optionList": [
                            {
                                "label": "三醋酯纤维(三醋纤)",
                                "value": "三醋酯纤维(三醋纤)"
                            },
                            {
                                "label": "二烯类弹性纤维",
                                "value": "二烯类弹性纤维"
                            },
                            {
                                "label": "亚麻",
                                "value": "亚麻"
                            },
                            {
                                "label": "兔毛",
                                "value": "兔毛"
                            },
                            {
                                "label": "兔绒",
                                "value": "兔绒"
                            },
                            {
                                "label": "再生纤维素纤维",
                                "value": "再生纤维素纤维"
                            },
                            {
                                "label": "大豆蛋白复合纤维",
                                "value": "大豆蛋白复合纤维"
                            },
                            {
                                "label": "大豆蛋白纤维",
                                "value": "大豆蛋白纤维"
                            },
                            {
                                "label": "大麻(汉麻)",
                                "value": "大麻(汉麻)"
                            },
                            {
                                "label": "头层牛皮",
                                "value": "头层牛皮"
                            },
                            {
                                "label": "山羊皮",
                                "value": "山羊皮"
                            },
                            {
                                "label": "山羊绒(羊绒)",
                                "value": "山羊绒(羊绒)"
                            },
                            {
                                "label": "改性聚丙烯腈纤维(改性腈纶)",
                                "value": "改性聚丙烯腈纤维(改性腈纶)"
                            },
                            {
                                "label": "新型聚酯纤维",
                                "value": "新型聚酯纤维"
                            },
                            {
                                "label": "木棉",
                                "value": "木棉"
                            },
                            {
                                "label": "柞蚕丝",
                                "value": "柞蚕丝"
                            },
                            {
                                "label": "桑蚕丝",
                                "value": "桑蚕丝"
                            },
                            {
                                "label": "棉",
                                "value": "棉"
                            },
                            {
                                "label": "海藻纤维",
                                "value": "海藻纤维"
                            },
                            {
                                "label": "牛二层皮",
                                "value": "牛二层皮"
                            },
                            {
                                "label": "牦牛毛",
                                "value": "牦牛毛"
                            },
                            {
                                "label": "牦牛绒",
                                "value": "牦牛绒"
                            },
                            {
                                "label": "猪皮",
                                "value": "猪皮"
                            },
                            {
                                "label": "玻璃纤维",
                                "value": "玻璃纤维"
                            },
                            {
                                "label": "甲克素纤维",
                                "value": "甲克素纤维"
                            },
                            {
                                "label": "石棉(石绵)",
                                "value": "石棉(石绵)"
                            },
                            {
                                "label": "碳纤维",
                                "value": "碳纤维"
                            },
                            {
                                "label": "竹原纤维(竹纤维)",
                                "value": "竹原纤维(竹纤维)"
                            },
                            {
                                "label": "粘胶纤维(粘纤)",
                                "value": "粘胶纤维(粘纤)"
                            },
                            {
                                "label": "绵羊皮",
                                "value": "绵羊皮"
                            },
                            {
                                "label": "羊毛",
                                "value": "羊毛"
                            },
                            {
                                "label": "羊驼毛",
                                "value": "羊驼毛"
                            },
                            {
                                "label": "羊驼绒",
                                "value": "羊驼绒"
                            },
                            {
                                "label": "聚丙烯纤维(丙纶)",
                                "value": "聚丙烯纤维(丙纶)"
                            },
                            {
                                "label": "聚丙烯腈纤维(腈纶)",
                                "value": "聚丙烯腈纤维(腈纶)"
                            },
                            {
                                "label": "聚乙烯纤维(乙纶)",
                                "value": "聚乙烯纤维(乙纶)"
                            },
                            {
                                "label": "聚乙烯醇纤维(维纶)",
                                "value": "聚乙烯醇纤维(维纶)"
                            },
                            {
                                "label": "聚乳酸纤维(PLA)",
                                "value": "聚乳酸纤维(PLA)"
                            },
                            {
                                "label": "聚四氟乙烯纤维(氟纶)",
                                "value": "聚四氟乙烯纤维(氟纶)"
                            },
                            {
                                "label": "聚对苯二甲酸乙二酯(涤纶)",
                                "value": "聚对苯二甲酸乙二酯(涤纶)"
                            },
                            {
                                "label": "聚氨酯弹性纤维(氨纶)",
                                "value": "聚氨酯弹性纤维(氨纶)"
                            },
                            {
                                "label": "聚氯乙烯(氯纶)",
                                "value": "聚氯乙烯(氯纶)"
                            },
                            {
                                "label": "聚烯烃弹性纤维",
                                "value": "聚烯烃弹性纤维"
                            },
                            {
                                "label": "聚苯硫醚纤维",
                                "value": "聚苯硫醚纤维"
                            },
                            {
                                "label": "聚酯纤维",
                                "value": "聚酯纤维"
                            },
                            {
                                "label": "聚酰亚胺纤维",
                                "value": "聚酰亚胺纤维"
                            },
                            {
                                "label": "聚酰胺纤维(锦纶)",
                                "value": "聚酰胺纤维(锦纶)"
                            },
                            {
                                "label": "芳香族聚酰胺纤维(芳纶)",
                                "value": "芳香族聚酰胺纤维(芳纶)"
                            },
                            {
                                "label": "苎麻",
                                "value": "苎麻"
                            },
                            {
                                "label": "莫代尔纤维(莫代尔)",
                                "value": "莫代尔纤维(莫代尔)"
                            },
                            {
                                "label": "莱赛尔纤维(莱赛尔)",
                                "value": "莱赛尔纤维(莱赛尔)"
                            },
                            {
                                "label": "貂毛",
                                "value": "貂毛"
                            },
                            {
                                "label": "超高分子量聚乙烯纤维",
                                "value": "超高分子量聚乙烯纤维"
                            },
                            {
                                "label": "醋酯纤维(醋纤)",
                                "value": "醋酯纤维(醋纤)"
                            },
                            {
                                "label": "金属纤维",
                                "value": "金属纤维"
                            },
                            {
                                "label": "金属镀膜纤维",
                                "value": "金属镀膜纤维"
                            },
                            {
                                "label": "铜氨纤维(铜氨丝)",
                                "value": "铜氨纤维(铜氨丝)"
                            },
                            {
                                "label": "陆禽毛",
                                "value": "陆禽毛"
                            },
                            {
                                "label": "陶瓷纤维",
                                "value": "陶瓷纤维"
                            },
                            {
                                "label": "马毛",
                                "value": "马毛"
                            },
                            {
                                "label": "马海毛",
                                "value": "马海毛"
                            },
                            {
                                "label": "骆驼毛",
                                "value": "骆驼毛"
                            },
                            {
                                "label": "骆驼绒",
                                "value": "骆驼绒"
                            },
                            {
                                "label": "鹿皮",
                                "value": "鹿皮"
                            },
                            {
                                "label": "黄麻",
                                "value": "黄麻"
                            },
                            {
                                "label": "其他",
                                "value": "其他"
                            }
                        ],
                        "rules": [],
                        "subType": "SINGLECHECK",
                        "whole": true,
                        "id": "material_prop_name",
                        "type": "SINGLECHECK"
                    },
                    {
                        "name": "含量(%)",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            },
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "头层牛皮",
                                            "fieldId": "material_prop_name"
                                        },
                                        {
                                            "symbol": "==",
                                            "value": "山羊皮",
                                            "fieldId": "material_prop_name"
                                        },
                                        {
                                            "symbol": "==",
                                            "value": "牛二层皮",
                                            "fieldId": "material_prop_name"
                                        },
                                        {
                                            "symbol": "==",
                                            "value": "猪皮",
                                            "fieldId": "material_prop_name"
                                        },
                                        {
                                            "symbol": "==",
                                            "value": "绵羊皮",
                                            "fieldId": "material_prop_name"
                                        },
                                        {
                                            "symbol": "==",
                                            "value": "鹿皮",
                                            "fieldId": "material_prop_name"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "decimal"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "regexRule",
                                "value": "^\\d+(\\.\\d{1,2})?$"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "minValueRule",
                                "exProperty": "not include",
                                "value": "0"
                            },
                            {
                                "valueIntervalInclude": true,
                                "name": "maxValueRule",
                                "exProperty": "include",
                                "value": "100"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "material_prop_content",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "销售渠道类型",
                "optionList": [
                    {
                        "label": "商场同款(线上线下都销售)",
                        "value": "852424991"
                    },
                    {
                        "label": "天猫独家(只在天猫销售)",
                        "value": "852486590"
                    },
                    {
                        "label": "纯电商(只在线上销售)",
                        "value": "852538341"
                    },
                    {
                        "label": "纯线下(只在线下O2O销售)",
                        "value": "852548091"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_148380063",
                "type": "SINGLECHECK"
            },
            {
                "name": "材质",
                "optionList": [
                    {
                        "label": "桑蚕丝",
                        "value": "3775433"
                    },
                    {
                        "label": "棉氨",
                        "value": "35317984"
                    },
                    {
                        "label": "棉涤",
                        "value": "3267652"
                    },
                    {
                        "label": "棉麻",
                        "value": "3267651"
                    },
                    {
                        "label": "涤棉",
                        "value": "3269748"
                    },
                    {
                        "label": "长绒棉",
                        "value": "4282117"
                    },
                    {
                        "label": "羊毛",
                        "value": "28352"
                    },
                    {
                        "label": "腈纶",
                        "value": "80664"
                    },
                    {
                        "label": "蚕丝",
                        "value": "130682"
                    },
                    {
                        "label": "麻",
                        "value": "3267653"
                    },
                    {
                        "label": "马海毛",
                        "value": "105221"
                    },
                    {
                        "label": "棉",
                        "value": "105255"
                    },
                    {
                        "label": "羊绒",
                        "value": "28351"
                    },
                    {
                        "label": "涤纶",
                        "value": "28355"
                    },
                    {
                        "label": "锦纶",
                        "value": "112997"
                    },
                    {
                        "label": "兔毛",
                        "value": "21122"
                    },
                    {
                        "label": "LYCRA莱卡",
                        "value": "39679567"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "莫代尔",
                        "value": "103124"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_20021",
                "type": "SINGLECHECK"
            },
            {
                "name": "羊毛含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "28352",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_6209522",
                "type": "SINGLECHECK"
            },
            {
                "name": "晴纶含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "80664",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19170501",
                "type": "SINGLECHECK"
            },
            {
                "name": "丝含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "130682",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19166853",
                "type": "SINGLECHECK"
            },
            {
                "name": "麻含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "3267653",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19170473",
                "type": "SINGLECHECK"
            },
            {
                "name": "马海毛",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "105221",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19172009",
                "type": "SINGLECHECK"
            },
            {
                "name": "棉含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "105255",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19166829",
                "type": "SINGLECHECK"
            },
            {
                "name": "羊绒含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "28351",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_6209523",
                "type": "SINGLECHECK"
            },
            {
                "name": "涤纶含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "28355",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19170528",
                "type": "SINGLECHECK"
            },
            {
                "name": "锦纶含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "112997",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19170552",
                "type": "SINGLECHECK"
            },
            {
                "name": "兔毛含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "21122",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19169792",
                "type": "SINGLECHECK"
            },
            {
                "name": "莱卡含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "39679567",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19170622",
                "type": "SINGLECHECK"
            },
            {
                "name": "莫代尔含量",
                "optionList": [
                    {
                        "label": "95%以上",
                        "value": "41036269"
                    },
                    {
                        "label": "30%以下",
                        "value": "121783509"
                    },
                    {
                        "label": "50%(含)-69%(含)",
                        "value": "493262425"
                    },
                    {
                        "label": "30%(含)-49%(含)",
                        "value": "493262426"
                    },
                    {
                        "label": "80%(含)-89%(含)",
                        "value": "493262429"
                    },
                    {
                        "label": "70%(含)-79%(含)",
                        "value": "493262430"
                    },
                    {
                        "label": "90%(含)-95%(含)",
                        "value": "538916342"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "103124",
                                    "fieldId": "prop_20021"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_19170594",
                "type": "SINGLECHECK"
            },
            {
                "name": "印花主题",
                "optionList": [
                    {
                        "label": "3D效果",
                        "value": "81450431"
                    },
                    {
                        "label": "中国文化",
                        "value": "11743611"
                    },
                    {
                        "label": "人文风景",
                        "value": "602952052"
                    },
                    {
                        "label": "人物图案",
                        "value": "21431479"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "几何图案",
                        "value": "3222243"
                    },
                    {
                        "label": "创意趣味",
                        "value": "39996207"
                    },
                    {
                        "label": "动物图案",
                        "value": "129881"
                    },
                    {
                        "label": "动物纹",
                        "value": "8034069"
                    },
                    {
                        "label": "卡通动漫",
                        "value": "14031880"
                    },
                    {
                        "label": "品牌LOGO",
                        "value": "19100504"
                    },
                    {
                        "label": "城市风貌",
                        "value": "242262213"
                    },
                    {
                        "label": "复古民族",
                        "value": "92768296"
                    },
                    {
                        "label": "定制/DIY",
                        "value": "255782277"
                    },
                    {
                        "label": "恶搞图案",
                        "value": "221228666"
                    },
                    {
                        "label": "抽象图案",
                        "value": "22083606"
                    },
                    {
                        "label": "文字思想",
                        "value": "248562952"
                    },
                    {
                        "label": "植物花卉",
                        "value": "104170033"
                    },
                    {
                        "label": "海魂",
                        "value": "3848802"
                    },
                    {
                        "label": "游戏",
                        "value": "3231231"
                    },
                    {
                        "label": "环保",
                        "value": "3430397"
                    },
                    {
                        "label": "科技科幻",
                        "value": "248568931"
                    },
                    {
                        "label": "自然风景",
                        "value": "7493282"
                    },
                    {
                        "label": "色彩世界",
                        "value": "11555622"
                    },
                    {
                        "label": "艺术主题",
                        "value": "94488979"
                    },
                    {
                        "label": "运动体育",
                        "value": "116033275"
                    },
                    {
                        "label": "骷髅恶魔",
                        "value": "233390698"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_137562777",
                "type": "SINGLECHECK"
            },
            {
                "name": "厚薄",
                "optionList": [
                    {
                        "label": "加绒加厚",
                        "value": "113060"
                    },
                    {
                        "label": "厚",
                        "value": "6602558"
                    },
                    {
                        "label": "常规",
                        "value": "3226292"
                    },
                    {
                        "label": "薄",
                        "value": "3216783"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216507",
                "type": "SINGLECHECK"
            },
            {
                "name": "袖长",
                "optionList": [
                    {
                        "label": "长袖",
                        "value": "29444"
                    },
                    {
                        "label": "短袖",
                        "value": "29445"
                    },
                    {
                        "label": "无袖",
                        "value": "29446"
                    },
                    {
                        "label": "五分袖",
                        "value": "14587965"
                    },
                    {
                        "label": "七分袖",
                        "value": "3216779"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216348",
                "type": "SINGLECHECK"
            },
            {
                "name": "领型",
                "optionList": [
                    {
                        "label": "高领",
                        "value": "29546"
                    },
                    {
                        "label": "圆领",
                        "value": "29447"
                    },
                    {
                        "label": "V领",
                        "value": "29448"
                    },
                    {
                        "label": "门筒领",
                        "value": "3267221"
                    },
                    {
                        "label": "连帽",
                        "value": "3267192"
                    },
                    {
                        "label": "衬衫领",
                        "value": "3267188"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "翻领",
                        "value": "29449"
                    },
                    {
                        "label": "堆堆领",
                        "value": "7486925"
                    },
                    {
                        "label": "立领",
                        "value": "29541"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "<a href='http://service.taobao.com/support/help-11908.htm?ad_id=&am_id=&cm_id=14002603329d1a6b4394&pm_id=' target='_blank' >领型是服装最重要的部位,造型详见图文解释</a>"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_20663",
                "type": "SINGLECHECK"
            },
            {
                "name": "面料分类",
                "optionList": [
                    {
                        "label": "棉毛布",
                        "value": "22252803"
                    },
                    {
                        "label": "竹节纱",
                        "value": "19859238"
                    },
                    {
                        "label": "汗布",
                        "value": "3964239"
                    },
                    {
                        "label": "梭织布",
                        "value": "3267738"
                    },
                    {
                        "label": "珠地网眼",
                        "value": "30372132"
                    },
                    {
                        "label": "毛圈布",
                        "value": "33952715"
                    },
                    {
                        "label": "罗纹布",
                        "value": "3267781"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "针织布",
                        "value": "3267737"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_20551",
                "type": "SINGLECHECK"
            },
            {
                "name": "款式细节",
                "optionList": [
                    {
                        "label": "绣标",
                        "value": "9431885"
                    },
                    {
                        "label": "补丁",
                        "value": "109411284"
                    },
                    {
                        "label": "口袋",
                        "value": "3243112"
                    },
                    {
                        "label": "罗纹装饰",
                        "value": "27338391"
                    },
                    {
                        "label": "徽章",
                        "value": "94545"
                    },
                    {
                        "label": "拼料",
                        "value": "26212829"
                    },
                    {
                        "label": "贴布",
                        "value": "130845"
                    },
                    {
                        "label": "镂空",
                        "value": "115771"
                    },
                    {
                        "label": "异色包边",
                        "value": "150257947"
                    },
                    {
                        "label": "毛边",
                        "value": "7716315"
                    },
                    {
                        "label": "撞色",
                        "value": "130568"
                    },
                    {
                        "label": "嵌线/贴条",
                        "value": "248648434"
                    },
                    {
                        "label": "多口袋",
                        "value": "3267895"
                    },
                    {
                        "label": "双层领",
                        "value": "3267194"
                    },
                    {
                        "label": "装饰袢",
                        "value": "204714003"
                    },
                    {
                        "label": "开衩",
                        "value": "72169586"
                    },
                    {
                        "label": "亮片",
                        "value": "29959"
                    },
                    {
                        "label": "纽扣装饰",
                        "value": "3267900"
                    },
                    {
                        "label": "亮面",
                        "value": "19253708"
                    },
                    {
                        "label": "拉链装饰",
                        "value": "20324457"
                    },
                    {
                        "label": "流苏",
                        "value": "115777"
                    },
                    {
                        "label": "不对称",
                        "value": "7642045"
                    },
                    {
                        "label": "破洞",
                        "value": "3267932"
                    },
                    {
                        "label": "金属装饰",
                        "value": "3267899"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "烫金",
                        "value": "8073582"
                    },
                    {
                        "label": "贴补绣",
                        "value": "28810366"
                    },
                    {
                        "label": "植绒印花",
                        "value": "16311590"
                    },
                    {
                        "label": "烫钻",
                        "value": "7019314"
                    },
                    {
                        "label": "提花",
                        "value": "130693"
                    },
                    {
                        "label": "绣花",
                        "value": "29957"
                    },
                    {
                        "label": "印花",
                        "value": "129555"
                    },
                    {
                        "label": "异色车线",
                        "value": "248634934"
                    },
                    {
                        "label": "异色门襟",
                        "value": "192168498"
                    },
                    {
                        "label": "其它",
                        "value": "-1"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216588",
                "type": "SINGLECHECK"
            },
            {
                "name": "款式细节",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "-1",
                                    "fieldId": "prop_122216588"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "INPUT",
                "whole": false,
                "id": "in_prop_122216588",
                "type": "INPUT"
            },
            {
                "name": "服饰工艺",
                "optionList": [
                    {
                        "label": "植绒",
                        "value": "3267928"
                    },
                    {
                        "label": "热转印",
                        "value": "6273927"
                    },
                    {
                        "label": "吊染",
                        "value": "19246631"
                    },
                    {
                        "label": "扎染",
                        "value": "5145675"
                    },
                    {
                        "label": "烫钻",
                        "value": "7019314"
                    },
                    {
                        "label": "免烫处理",
                        "value": "3267927"
                    },
                    {
                        "label": "褶皱",
                        "value": "112602"
                    },
                    {
                        "label": "泼墨",
                        "value": "3267933"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "烂花",
                        "value": "33264561"
                    },
                    {
                        "label": "磨边",
                        "value": "130844"
                    },
                    {
                        "label": "做旧",
                        "value": "112597"
                    },
                    {
                        "label": "蜡染",
                        "value": "6785365"
                    },
                    {
                        "label": "破洞",
                        "value": "3267932"
                    },
                    {
                        "label": "磨毛",
                        "value": "130694"
                    },
                    {
                        "label": "水洗",
                        "value": "102510"
                    },
                    {
                        "label": "其它",
                        "value": "-1"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216589",
                "type": "SINGLECHECK"
            },
            {
                "name": "服饰工艺",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "-1",
                                    "fieldId": "prop_122216589"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "INPUT",
                "whole": false,
                "id": "in_prop_122216589",
                "type": "INPUT"
            },
            {
                "name": "袖型",
                "optionList": [
                    {
                        "label": "常规",
                        "value": "3226292"
                    },
                    {
                        "label": "插肩袖",
                        "value": "27414630"
                    },
                    {
                        "label": "蝙蝠袖",
                        "value": "7576170"
                    },
                    {
                        "label": "无袖",
                        "value": "29446"
                    },
                    {
                        "label": "落肩袖",
                        "value": "152550559"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_2917380",
                "type": "SINGLECHECK"
            },
            {
                "name": "花型图案",
                "optionList": [
                    {
                        "label": "条纹",
                        "value": "29452"
                    },
                    {
                        "label": "格子",
                        "value": "29453"
                    },
                    {
                        "label": "纯色",
                        "value": "29454"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "人物",
                        "value": "46649"
                    },
                    {
                        "label": "卡通动漫",
                        "value": "14031880"
                    },
                    {
                        "label": "动物图案",
                        "value": "129881"
                    },
                    {
                        "label": "几何图案",
                        "value": "3222243"
                    },
                    {
                        "label": "千鸟格",
                        "value": "3222563"
                    },
                    {
                        "label": "波点",
                        "value": "3503346"
                    },
                    {
                        "label": "字母数字",
                        "value": "9215557"
                    },
                    {
                        "label": "人字纹",
                        "value": "13021262"
                    },
                    {
                        "label": "骷髅头",
                        "value": "3346764"
                    },
                    {
                        "label": "圆点",
                        "value": "113019"
                    },
                    {
                        "label": "迷彩",
                        "value": "52813"
                    },
                    {
                        "label": "动物纹",
                        "value": "8034069"
                    },
                    {
                        "label": "民族风花型",
                        "value": "246900243"
                    },
                    {
                        "label": "渐变",
                        "value": "3351515"
                    },
                    {
                        "label": "大满花",
                        "value": "251252217"
                    },
                    {
                        "label": "小满花",
                        "value": "251600695"
                    },
                    {
                        "label": "植物花卉",
                        "value": "104170033"
                    },
                    {
                        "label": "3D效果",
                        "value": "81450431"
                    },
                    {
                        "label": "碎花",
                        "value": "107622"
                    },
                    {
                        "label": "其它",
                        "value": "-1"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_20603",
                "type": "SINGLECHECK"
            },
            {
                "name": "花型图案",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "-1",
                                    "fieldId": "prop_20603"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "INPUT",
                "whole": false,
                "id": "in_prop_20603",
                "type": "INPUT"
            },
            {
                "name": "版型",
                "optionList": [
                    {
                        "label": "超修身",
                        "value": "137664819"
                    },
                    {
                        "label": "宽松",
                        "value": "4043538"
                    },
                    {
                        "label": "修身",
                        "value": "3267162"
                    },
                    {
                        "label": "标准",
                        "value": "29947"
                    },
                    {
                        "label": "特宽",
                        "value": "118072222"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216586",
                "type": "SINGLECHECK"
            },
            {
                "name": "适用季节",
                "optionList": [
                    {
                        "label": "四季",
                        "value": "3288679"
                    },
                    {
                        "label": "冬季",
                        "value": "29458"
                    },
                    {
                        "label": "秋季",
                        "value": "29938"
                    },
                    {
                        "label": "夏季",
                        "value": "29457"
                    },
                    {
                        "label": "春季",
                        "value": "29937"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216345",
                "type": "SINGLECHECK"
            },
            {
                "name": "适用场景",
                "optionList": [
                    {
                        "label": "日常",
                        "value": "3224795"
                    },
                    {
                        "label": "商务",
                        "value": "28908"
                    },
                    {
                        "label": "沙滩",
                        "value": "103414"
                    },
                    {
                        "label": "其他休闲",
                        "value": "29535"
                    },
                    {
                        "label": "旅游",
                        "value": "27454"
                    },
                    {
                        "label": "居家",
                        "value": "4068154"
                    },
                    {
                        "label": "雨天",
                        "value": "17782331"
                    },
                    {
                        "label": "运动",
                        "value": "1628"
                    },
                    {
                        "label": "宴会",
                        "value": "139179"
                    },
                    {
                        "label": "婚礼",
                        "value": "4060667"
                    },
                    {
                        "label": "上班",
                        "value": "3302158"
                    },
                    {
                        "label": "舞蹈",
                        "value": "40809"
                    },
                    {
                        "label": "校园",
                        "value": "3315430"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216515",
                "type": "SINGLECHECK"
            },
            {
                "name": "适用对象",
                "optionList": [
                    {
                        "label": "老年",
                        "value": "101181"
                    },
                    {
                        "label": "中年",
                        "value": "3267960"
                    },
                    {
                        "label": "青少年",
                        "value": "42007"
                    },
                    {
                        "label": "青年",
                        "value": "3267959"
                    },
                    {
                        "label": "大码",
                        "value": "3478795"
                    },
                    {
                        "label": "情侣装",
                        "value": "50287"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_122216608",
                "type": "SINGLECHECK"
            },
            {
                "name": "基础风格",
                "optionList": [
                    {
                        "label": "青春流行",
                        "value": "248572013"
                    },
                    {
                        "label": "其他",
                        "value": "20213"
                    },
                    {
                        "label": "时尚都市",
                        "value": "3250994"
                    },
                    {
                        "label": "商务绅士",
                        "value": "44261879"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_42722636",
                "type": "SINGLECHECK"
            },
            {
                "name": "细分风格",
                "optionList": [
                    {
                        "label": "潮",
                        "value": "178914558"
                    },
                    {
                        "label": "小清新",
                        "value": "57159575"
                    },
                    {
                        "label": "商务休闲",
                        "value": "112571"
                    },
                    {
                        "label": "商务正装",
                        "value": "28908344"
                    },
                    {
                        "label": "中国风",
                        "value": "3463525"
                    },
                    {
                        "label": "青春活力",
                        "value": "3641697"
                    },
                    {
                        "label": "朋克",
                        "value": "29931"
                    },
                    {
                        "label": "日系复古",
                        "value": "27679914"
                    },
                    {
                        "label": "工装军旅",
                        "value": "185138439"
                    },
                    {
                        "label": "英式学院",
                        "value": "248588047"
                    },
                    {
                        "label": "基础大众",
                        "value": "248584184"
                    },
                    {
                        "label": "精致韩风",
                        "value": "43861747"
                    },
                    {
                        "label": "欧美简约",
                        "value": "39098411"
                    },
                    {
                        "label": "美式休闲",
                        "value": "30143424"
                    },
                    {
                        "label": "嘻哈",
                        "value": "3329741"
                    }
                ],
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "prop_42718685",
                "type": "SINGLECHECK"
            }
        ],
        "name": "商品属性",
        "id": "prop"
    },
    {
        "data": [
            {
                "name": "发货时间设置",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "ship_time_setting",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "发货时间设置",
                        "optionList": [
                            {
                                "label": "不设置",
                                "value": "0"
                            },
                            {
                                "label": "固定发货时间",
                                "value": "1"
                            },
                            {
                                "label": "相对发货时间",
                                "value": "2"
                            }
                        ],
                        "defaultValues": "0",
                        "rules": [],
                        "subType": "RADIO",
                        "tip": "[\"<span style='color:#999;'>买家付款后48小时内要完成发货，否则可能引起投诉与退款。<a style='color:#0088cb;' href='//service.tmall.com/support/tmall/knowledge-1126800.htm?spm=a211lz.11069290.0.0.140b2b90GV4SLS' target='_blank' >详情</a></span>\"]",
                        "whole": false,
                        "id": "ship_time_type",
                        "type": "SINGLECHECK"
                    },
                    {
                        "name": "时间",
                        "rules": [],
                        "subType": "TRANSFORM",
                        "tip": "[\"<span style='color:#999;'>请认真填写。如未按照约定时间发货，可能引起投诉与退款。根据天猫规则，只能选择大于等于三天的时间。<a style='color:#0088cb;' href='//service.tmall.com/support/tmall/knowledge-1126800.htm?spm=a211lz.11069290.0.0.140b2b90GV4SLS' target='_blank' >详情</a></span>\"]",
                        "whole": false,
                        "id": "ship_time",
                        "type": "MULTICHECK"
                    },
                    {
                        "name": "按规格设置发货时间",
                        "optionList": [
                            {
                                "label": "按规格设置发货时间",
                                "value": "0"
                            }
                        ],
                        "defaultValues": "1",
                        "rules": [],
                        "subType": "MULTICHECK",
                        "whole": false,
                        "id": "update_type",
                        "type": "MULTICHECK"
                    }
                ]
            },
            {
                "name": "颜色扩展",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "MULTICOMPLEX",
                "whole": true,
                "id": "prop_extend_1627207",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "颜色",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "in_prop_1627207",
                        "type": "INPUT"
                    },
                    {
                        "name": "属性图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxTargetSizeRule",
                                "exProperty": "include",
                                "value": "3145728"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "prop_image",
                        "type": "INPUT"
                    },
                    {
                        "name": "色系",
                        "optionList": [
                            {
                                "childrenOptions": [
                                    {
                                        "label": "白色",
                                        "value": "28320",
                                        "desc": "255,255,255"
                                    }
                                ],
                                "label": "白色系",
                                "value": "28320",
                                "desc": "255,255,255"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "浅灰色",
                                        "value": "28332",
                                        "desc": "228,228,228"
                                    }
                                ],
                                "label": "灰色系",
                                "value": "28332",
                                "desc": "128,128,128"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "黑色",
                                        "value": "28341",
                                        "desc": "0,0,0"
                                    }
                                ],
                                "label": "黑色系",
                                "value": "28341",
                                "desc": "0,0,0"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "红色",
                                        "value": "28326",
                                        "desc": "255,0,0"
                                    },
                                    {
                                        "label": "粉红色",
                                        "value": "3232480",
                                        "desc": "255,187,193"
                                    }
                                ],
                                "label": "红色系",
                                "value": "28326",
                                "desc": "255,255,255"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "黄色",
                                        "value": "28324",
                                        "desc": "255,255,0"
                                    },
                                    {
                                        "label": "桔色",
                                        "value": "90554",
                                        "desc": "255,165,0"
                                    }
                                ],
                                "label": "黄色系",
                                "value": "28324",
                                "desc": "255,255,0"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "绿色",
                                        "value": "28335",
                                        "desc": "0,128,0"
                                    }
                                ],
                                "label": "绿色系",
                                "value": "28335",
                                "desc": "0,128,0"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "蓝色",
                                        "value": "28338",
                                        "desc": "0,0,254"
                                    }
                                ],
                                "label": "蓝色系",
                                "value": "28338",
                                "desc": "0,0,255"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "紫色",
                                        "value": "28329",
                                        "desc": "128,0,128"
                                    }
                                ],
                                "label": "紫色系",
                                "value": "28329",
                                "desc": "128,0,128"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "褐色",
                                        "value": "132069",
                                        "desc": "133,91,0"
                                    }
                                ],
                                "label": "棕色系",
                                "value": "132069",
                                "desc": "124,75,0"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "花色",
                                        "value": "130164"
                                    }
                                ],
                                "label": "花色系",
                                "value": "130164"
                            },
                            {
                                "childrenOptions": [
                                    {
                                        "label": "透明",
                                        "value": "107121"
                                    }
                                ],
                                "label": "透明系",
                                "value": "107121"
                            }
                        ],
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "minInputNumRule",
                                "exProperty": "not include",
                                "value": "0"
                            },
                            {
                                "valueIntervalInclude": true,
                                "name": "maxInputNumRule",
                                "exProperty": "include",
                                "value": "3"
                            }
                        ],
                        "subType": "MULTICHECK",
                        "whole": true,
                        "id": "basecolor",
                        "type": "MULTICHECK"
                    }
                ]
            },
            {
                "name": "尺码分组",
                "optionList": [
                    {
                        "label": "自定义",
                        "value": "-1:自定义:-1"
                    }
                ],
                "defaultValues": "-1:自定义:-1",
                "rules": [],
                "subType": "SINGLECHECK",
                "whole": false,
                "id": "std_size_group",
                "type": "SINGLECHECK"
            },
            {
                "name": "尺码扩展",
                "rules": [],
                "subType": "MULTICOMPLEX",
                "tip": "[\"尺码表中的字段至少两个维度必填。\",\"尺码表中的字段若选择填写某个字段，则所有尺码对应的该字段信息均需填写。\",\"因尺码表结构调整，您填写的数据项可能被调整为自定义项，不影响信息展示。\"]",
                "whole": true,
                "id": "std_size_extends_20509",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "“自定义”尺码",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "tipRule",
                                "value": "新版尺码操作指南：<a href=\"//maowo.tmall.com/discussion.htm?spm=a220z.1000884.0.0.5fHBzq&amp;id=29041\" target=\"_blank\" data-spm-anchor-id=\"a220z.1000884.0.0\">点击查看</a>"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "tipRule",
                                "value": "尺码备注、自定义尺码标准均不能填写营销词或品牌词，包括不限于包邮/满减/折扣等"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "tipRule",
                                "value": "自定义尺码值只能输入以下格式：【数字/字母/数字；字母/字母，字母+数字 字母/数字；数字/字母；数字+字母；数字/数字；数字/数字/字母；字母；数字/数字+字母/字母；数字/数字+字母；数字】，并支持在上述格式前添加性别如“男/女/男童/女童”。若无支持的格式，可最多新增一个不在上述格式范围内的尺码值"
                            },
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "-1:自定义:-1",
                                            "fieldId": "std_size_group"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "tip": "[\"自定义尺码值只能输入以下格式：【数字/字母/数字；字母/字母，字母+数字 字母/数字；数字/字母；数字+字母；数字/数字；数字/数字/字母；字母；数字/数字+字母/字母；数字/数字+字母；数字】，并支持在上述格式前添加性别如“男/女/男童/女童”。若无支持的格式，可最多新增一个不在上述格式范围内的尺码值\"]",
                        "whole": true,
                        "id": "std_size_prop_20509_-1",
                        "type": "INPUT"
                    },
                    {
                        "name": "尺码备注",
                        "rules": [
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "minLengthRule",
                                "exProperty": "include",
                                "value": "1"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxLengthRule",
                                "exProperty": "include",
                                "value": "30"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "tipRule",
                                "value": "尺码备注不能包含逗号、冒号、分号、星号、短横线等特殊符号"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_tip",
                        "type": "INPUT"
                    },
                    {
                        "name": "身高（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_shengao",
                        "type": "INPUT"
                    },
                    {
                        "name": "身高（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_shengao_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_shengao_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_shengao_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "体重（公斤）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_tizhong",
                        "type": "INPUT"
                    },
                    {
                        "name": "体重（公斤）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_tizhong_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_tizhong_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_tizhong_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "肩宽（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_jiankuan",
                        "type": "INPUT"
                    },
                    {
                        "name": "肩宽（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_jiankuan_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_jiankuan_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_jiankuan_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "胸围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_xiongwei",
                        "type": "INPUT"
                    },
                    {
                        "name": "胸围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_xiongwei_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiongwei_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiongwei_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "腰围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_yaowei",
                        "type": "INPUT"
                    },
                    {
                        "name": "腰围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_yaowei_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yaowei_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yaowei_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "袖长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_xiuchang",
                        "type": "INPUT"
                    },
                    {
                        "name": "袖长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_xiuchang_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiuchang_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiuchang_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "衣长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_yichang",
                        "type": "INPUT"
                    },
                    {
                        "name": "衣长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_yichang_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yichang_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yichang_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "背宽（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_beikuan",
                        "type": "INPUT"
                    },
                    {
                        "name": "背宽（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_beikuan_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_beikuan_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_beikuan_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "前长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_qianchang",
                        "type": "INPUT"
                    },
                    {
                        "name": "前长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_qianchang_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_qianchang_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_qianchang_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "摆围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_baiwei",
                        "type": "INPUT"
                    },
                    {
                        "name": "摆围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_baiwei_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_baiwei_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_baiwei_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "下摆围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_xiabaiwei",
                        "type": "INPUT"
                    },
                    {
                        "name": "下摆围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_xiabaiwei_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiabaiwei_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiabaiwei_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "袖口（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_xiukou",
                        "type": "INPUT"
                    },
                    {
                        "name": "袖口（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_xiukou_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiukou_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiukou_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "袖肥（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_xiufei",
                        "type": "INPUT"
                    },
                    {
                        "name": "袖肥（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_xiufei_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiufei_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_xiufei_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "中腰（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_zhongyao",
                        "type": "INPUT"
                    },
                    {
                        "name": "中腰（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_zhongyao_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_zhongyao_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_zhongyao_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "领深（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_lingshen",
                        "type": "INPUT"
                    },
                    {
                        "name": "领深（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_lingshen_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_lingshen_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_lingshen_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "领高（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_linggao",
                        "type": "INPUT"
                    },
                    {
                        "name": "领高（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_linggao_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_linggao_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_linggao_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "领宽（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_lingkuan",
                        "type": "INPUT"
                    },
                    {
                        "name": "领宽（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_lingkuan_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_lingkuan_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_lingkuan_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "领围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_lingwei",
                        "type": "INPUT"
                    },
                    {
                        "name": "领围（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_lingwei_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_lingwei_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_lingwei_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "圆摆后中长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_yuanbaihou",
                        "type": "INPUT"
                    },
                    {
                        "name": "圆摆后中长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_yuanbaihou_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yuanbaihou_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yuanbaihou_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "平摆衣长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_pingbai",
                        "type": "INPUT"
                    },
                    {
                        "name": "平摆衣长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_pingbai_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_pingbai_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_pingbai_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "圆摆衣长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "==",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "or",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "size_mapping_yuanbai",
                        "type": "INPUT"
                    },
                    {
                        "name": "圆摆衣长（cm）",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "dependGroup": {
                                    "dependExpressList": [
                                        {
                                            "symbol": "!=",
                                            "value": "均码",
                                            "fieldId": "std_size_prop_20509_-1"
                                        }
                                    ],
                                    "operator": "and",
                                    "dependGroupList": [],
                                    "empty": false
                                },
                                "name": "disableRule",
                                "value": "true"
                            }
                        ],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_yuanbai_range",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "最小值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yuanbai_from",
                                "type": "INPUT"
                            },
                            {
                                "name": "最大值",
                                "rules": [],
                                "whole": false,
                                "id": "size_mapping_yuanbai_to",
                                "type": "INPUT"
                            }
                        ]
                    },
                    {
                        "name": "尺码表自定义字段-1",
                        "rules": [],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_-1",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "尺码表自定义字段-1名称",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含数字"
                                    },
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含逗号、冒号、分号、星号、短横线等特殊符号"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-1_name",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-1值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "==",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "or",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-1_value",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-1值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "!=",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "and",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-1_value_range",
                                "type": "COMPLEX",
                                "fieldList": [
                                    {
                                        "name": "最小值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-1_value_from",
                                        "type": "INPUT"
                                    },
                                    {
                                        "name": "最大值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-1_value_to",
                                        "type": "INPUT"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "尺码表自定义字段-2",
                        "rules": [],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_-2",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "尺码表自定义字段-2名称",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含数字"
                                    },
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含逗号、冒号、分号、星号、短横线等特殊符号"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-2_name",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-2值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "==",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "or",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-2_value",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-2值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "!=",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "and",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-2_value_range",
                                "type": "COMPLEX",
                                "fieldList": [
                                    {
                                        "name": "最小值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-2_value_from",
                                        "type": "INPUT"
                                    },
                                    {
                                        "name": "最大值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-2_value_to",
                                        "type": "INPUT"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "尺码表自定义字段-3",
                        "rules": [],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_-3",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "尺码表自定义字段-3名称",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含数字"
                                    },
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含逗号、冒号、分号、星号、短横线等特殊符号"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-3_name",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-3值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "==",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "or",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-3_value",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-3值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "!=",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "and",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-3_value_range",
                                "type": "COMPLEX",
                                "fieldList": [
                                    {
                                        "name": "最小值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-3_value_from",
                                        "type": "INPUT"
                                    },
                                    {
                                        "name": "最大值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-3_value_to",
                                        "type": "INPUT"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "尺码表自定义字段-4",
                        "rules": [],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_-4",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "尺码表自定义字段-4名称",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含数字"
                                    },
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含逗号、冒号、分号、星号、短横线等特殊符号"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-4_name",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-4值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "==",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "or",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-4_value",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-4值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "!=",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "and",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-4_value_range",
                                "type": "COMPLEX",
                                "fieldList": [
                                    {
                                        "name": "最小值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-4_value_from",
                                        "type": "INPUT"
                                    },
                                    {
                                        "name": "最大值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-4_value_to",
                                        "type": "INPUT"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "尺码表自定义字段-5",
                        "rules": [],
                        "subType": "COMPLEX",
                        "whole": true,
                        "id": "size_mapping_-5",
                        "type": "COMPLEX",
                        "fieldList": [
                            {
                                "name": "尺码表自定义字段-5名称",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含数字"
                                    },
                                    {
                                        "valueIntervalInclude": false,
                                        "name": "tipRule",
                                        "value": "尺码表自定义字段名称不能包含逗号、冒号、分号、星号、短横线等特殊符号"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-5_name",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-5值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "==",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "or",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-5_value",
                                "type": "INPUT"
                            },
                            {
                                "name": "尺码表自定义字段-5值",
                                "rules": [
                                    {
                                        "valueIntervalInclude": false,
                                        "dependGroup": {
                                            "dependExpressList": [
                                                {
                                                    "symbol": "!=",
                                                    "value": "均码",
                                                    "fieldId": "std_size_prop_20509_-1"
                                                }
                                            ],
                                            "operator": "and",
                                            "dependGroupList": [],
                                            "empty": false
                                        },
                                        "name": "disableRule",
                                        "value": "true"
                                    }
                                ],
                                "whole": false,
                                "id": "size_mapping_-5_value_range",
                                "type": "COMPLEX",
                                "fieldList": [
                                    {
                                        "name": "最小值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-5_value_from",
                                        "type": "INPUT"
                                    },
                                    {
                                        "name": "最大值",
                                        "rules": [],
                                        "whole": false,
                                        "id": "size_mapping_-5_value_to",
                                        "type": "INPUT"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "SKU",
                "rules": [],
                "subType": "MULTICOMPLEX",
                "whole": true,
                "id": "sku",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "颜色",
                        "rules": [],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "in_prop_1627207",
                        "type": "INPUT"
                    },
                    {
                        "name": "“自定义”尺码",
                        "rules": [],
                        "subType": "INPUT",
                        "tip": "[\"自定义尺码值只能输入以下格式：【数字/字母/数字；字母/字母，字母+数字 字母/数字；数字/字母；数字+字母；数字/数字；数字/数字/字母；字母；数字/数字+字母/字母；数字/数字+字母；数字】，并支持在上述格式前添加性别如“男/女/男童/女童”。若无支持的格式，可最多新增一个不在上述格式范围内的尺码值\"]",
                        "whole": true,
                        "id": "std_size_prop_20509_-1",
                        "type": "INPUT"
                    },
                    {
                        "name": "价格",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "decimal"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "maxValueRule",
                                "exProperty": "not include",
                                "value": "1000000000"
                            }
                        ],
                        "subType": "INPUTDECIMAL",
                        "whole": true,
                        "id": "sku_price",
                        "type": "INPUT"
                    },
                    {
                        "name": "库存",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "long"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "maxValueRule",
                                "exProperty": "not include",
                                "value": "2147483647"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "regexRule",
                                "value": "([1-9][0-9]{0,10}|[0-9])"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "sku_quantity",
                        "type": "INPUT"
                    },
                    {
                        "name": "商家编码",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxLengthRule",
                                "exProperty": "include",
                                "value": "64"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "sku_outerId",
                        "type": "INPUT"
                    },
                    {
                        "name": "条形码",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "tipRule",
                                "value": "<a href='https://maowo.tmall.com/discussion.htm?id=45633&circleId=37' target='_blank'> 查看帮助 <a/>"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxLengthRule",
                                "exProperty": "include",
                                "value": "60"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "sku_barcode",
                        "type": "INPUT"
                    },
                    {
                        "name": "上市时间",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "date"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUTTIME",
                        "whole": true,
                        "id": "sku_MarketTime",
                        "type": "INPUT"
                    },
                    {
                        "name": "货号",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxLengthRule",
                                "exProperty": "include",
                                "value": "60"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": true,
                        "id": "sku_ProductCode",
                        "type": "INPUT"
                    },
                    {
                        "name": "按规格设置发货时间",
                        "rules": [],
                        "subType": "TRANSFORM",
                        "whole": true,
                        "id": "sku_ship_time",
                        "type": "MULTICHECK"
                    }
                ]
            },
            {
                "name": "一口价及总库存",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "fixedAndQuantity",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "价格",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUTDECIMAL",
                        "tip": "[\"商品价格 应是 销售属性表中 库存不为0的SKU价格之一\",\"为避免价格变动引发的违规，请谨慎输入价格。\",\"https://rule.tmall.com/tdetail-2695.htm\"]",
                        "whole": false,
                        "id": "price",
                        "type": "INPUT"
                    },
                    {
                        "name": "总库存",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "tip": "[\"请认真填写。无货空挂，可能引起投诉与退款\",\"https://bangpai.taobao.com/group/thread/145336-9509231.htm\"]",
                        "whole": false,
                        "id": "quantity",
                        "type": "INPUT"
                    },
                    {
                        "name": "商家编码",
                        "rules": [],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "outerId",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品条形码",
                        "rules": [],
                        "subType": "INPUT",
                        "tip": "[\"如果规格（如颜色，容量，尺码等）区域已填写条形码，则此处不用填写。\",\"请严格按照外包装填写条形码信息。\"]",
                        "whole": false,
                        "id": "barcode",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "尺码表设置",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "size_table_setting",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "optionList": [
                            {
                                "label": "默认选项",
                                "value": "0"
                            },
                            {
                                "label": "自定义设置",
                                "value": "1"
                            }
                        ],
                        "defaultValues": "0",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            }
                        ],
                        "subType": "RADIO",
                        "whole": false,
                        "id": "size_table_type",
                        "type": "SINGLECHECK"
                    }
                ]
            },
            {
                "name": "尺码表设置",
                "defaultValues": [
                    [
                        "尺码",
                        "胸围",
                        "袖长",
                        "袖口",
                        "腰围",
                        "臀围",
                        "净裤长",
                        "裤长",
                        "前浪",
                        "后浪",
                        "后中长",
                        "大腿围",
                        "小腿围",
                        "脚口",
                        "克重",
                        "身高",
                        "体重"
                    ]
                ],
                "rules": [],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "size_mapping",
                "type": "MULTICOMPLEX",
                "fieldList": []
            }
        ],
        "name": "商品价格库存",
        "id": "priceAndStock"
    },
    {
        "data": [
            {
                "name": "商品指数",
                "rules": [],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "goods_index",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "商品指数-状态",
                        "optionList": [
                            {
                                "label": "启用",
                                "value": "1"
                            },
                            {
                                "label": "禁用",
                                "value": "0"
                            }
                        ],
                        "rules": [],
                        "subType": "MULTICOMPLEX",
                        "whole": false,
                        "id": "goods_index_status",
                        "type": "MULTICOMPLEX",
                        "fieldList": []
                    },
                    {
                        "name": "商品指数-表格",
                        "defaultValues": [
                            {
                                "options": [
                                    "版型指数",
                                    "紧身",
                                    "修身",
                                    "常规",
                                    "宽松"
                                ],
                                "checked": ""
                            },
                            {
                                "options": [
                                    "弹力指数",
                                    "无弹",
                                    "微弹",
                                    "弹力",
                                    "超弹"
                                ],
                                "checked": ""
                            },
                            {
                                "options": [
                                    "厚度指数",
                                    "薄款",
                                    "适中",
                                    "厚实",
                                    "加厚"
                                ],
                                "checked": ""
                            },
                            {
                                "options": [
                                    "长度指数",
                                    "短款",
                                    "常规",
                                    "中长",
                                    "超长"
                                ],
                                "checked": ""
                            },
                            {
                                "options": [
                                    "透气指数",
                                    "不透",
                                    "常规",
                                    "透气",
                                    "超透"
                                ],
                                "checked": ""
                            },
                            {
                                "options": [
                                    "柔软度指数",
                                    "微柔",
                                    "常规",
                                    "柔软",
                                    "超柔"
                                ],
                                "checked": ""
                            }
                        ],
                        "rules": [],
                        "subType": "MULTICOMPLEX",
                        "whole": false,
                        "id": "goods_index_table",
                        "type": "MULTICOMPLEX",
                        "fieldList": []
                    }
                ]
            },
            {
                "name": "试穿报告",
                "rules": [],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "try_on_report",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "试穿报告-状态",
                        "optionList": [
                            {
                                "label": "启用",
                                "value": "1"
                            },
                            {
                                "label": "禁用",
                                "value": "0"
                            }
                        ],
                        "rules": [],
                        "subType": "MULTICOMPLEX",
                        "whole": false,
                        "id": "try_on_report_status",
                        "type": "MULTICOMPLEX",
                        "fieldList": []
                    },
                    {
                        "name": "试穿报告-表格",
                        "defaultValues": [
                            [
                                "试穿者",
                                "身高/体重",
                                "三围",
                                "试穿尺码",
                                "试穿体验"
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        ],
                        "rules": [],
                        "subType": "COMPLEX",
                        "whole": false,
                        "id": "try_on_report_table",
                        "type": "COMPLEX",
                        "fieldList": []
                    }
                ]
            },
            {
                "name": "尺码推荐表",
                "rules": [],
                "subType": "MULTICOMPLEX",
                "whole": false,
                "id": "size_recommend",
                "type": "MULTICOMPLEX",
                "fieldList": [
                    {
                        "name": "尺码推荐表-状态",
                        "optionList": [
                            {
                                "label": "启用",
                                "value": "1"
                            },
                            {
                                "label": "禁用",
                                "value": "0"
                            }
                        ],
                        "rules": [],
                        "subType": "MULTICOMPLEX",
                        "whole": false,
                        "id": "size_recommend_status",
                        "type": "MULTICOMPLEX",
                        "fieldList": []
                    },
                    {
                        "name": "尺码推荐表-表格",
                        "defaultValues": [
                            [
                                "体重/身高",
                                "160",
                                "165",
                                "170",
                                "175"
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        ],
                        "rules": [],
                        "subType": "MULTICOMPLEX",
                        "whole": false,
                        "id": "size_recommend_table",
                        "type": "MULTICOMPLEX",
                        "fieldList": []
                    }
                ]
            }
        ],
        "name": "详情页属性",
        "id": "detailPageProp"
    },
    {
        "data": [
            {
                "name": "物流参数",
                "rules": [],
                "subType": "COMPLEX",
                "whole": false,
                "id": "item_size_weight",
                "type": "COMPLEX",
                "fieldList": [
                    {
                        "name": "物流体积(m³)",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "regexRule",
                                "value": "([0-9]{0,3})(\\.[0-9]{0,6})?"
                            }
                        ],
                        "subType": "INPUTDECIMAL",
                        "whole": false,
                        "id": "item_size",
                        "type": "INPUT"
                    },
                    {
                        "name": "物流重量(kg)",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "regexRule",
                                "value": "([0-9]{0,4})(\\.[0-9]{0,3})?"
                            }
                        ],
                        "subType": "INPUTDECIMAL",
                        "tip": "[\"单位为kg。只能传入数值类型（包含小数），不能带单位，单位默认为kg\"]",
                        "whole": false,
                        "id": "item_weight",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "所在地",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "COMPLEX",
                "whole": false,
                "id": "location",
                "type": "COMPLEX",
                "fieldList": [
                    {
                        "name": "省份",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "prov",
                        "type": "INPUT"
                    },
                    {
                        "name": "城市",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "text"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "city",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "运费模板",
                "optionList": [
                    {
                        "label": "陌速",
                        "value": "13255143830"
                    },
                    {
                        "label": "卖家包邮",
                        "value": "-1"
                    }
                ],
                "defaultValues": 13255143830,
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "SINGLECHECK",
                "tip": "[\"目前快麦设计系统天猫商品发布，运费模板暂时仅支持卖家承担运费\"]",
                "whole": false,
                "id": "postage_id",
                "type": "INPUT"
            }
        ],
        "name": "商品物流信息",
        "id": "logistics"
    },
    {
        "data": [
            {
                "name": "商品标题",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "valueTypeRule",
                        "value": "text"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "查看<a target='_blank' class='wanxiang-knowledge' data-knowledge='13128343' href='//maowo.tmall.com/discussion.htm?id=73985&circleId=2'>标题词语使用规范</a>"
                    },
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "maxLengthRule",
                        "exProperty": "include",
                        "value": "60"
                    },
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "minLengthRule",
                        "exProperty": "include",
                        "value": "1"
                    }
                ],
                "subType": "INPUT",
                "whole": false,
                "id": "title",
                "type": "INPUT"
            },
            {
                "name": "商品卖点",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "<img src='//img.alicdn.com/tps/i2/T11dXzXvNbXXc8i6gX-385-201.png' style='width:385px;height:201px;' />"
                    },
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "maxLengthRule",
                        "exProperty": "include",
                        "value": "40"
                    }
                ],
                "subType": "INPUT",
                "tip": "[\"必须是商品本身背书，不得出现营销优惠信息，不得出现”免单“”赠“”包邮“”満减“”满折“；仅允许使用空格，全角括号（）；案例：“传奇设计师设计，全陶瓷机身”，“法国进口，专为单身同学设计的迷你洗衣机”。\"]",
                "whole": false,
                "id": "sell_points",
                "type": "COMPLEX",
                "fieldList": []
            },
            {
                "name": "商品图片",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "<span style='color:#f60;'>新版图片上传支持批量功能：您可将需要上传的文件夹或多张图片拖放到上传窗口，即可完成上传操作，更加便捷</span>"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "图片至少上传1张（第一张不计图片空间容量），图片类型<span style='color:#f60;'>只能为png、jpg、jpeg，且大小不超过500K</span>"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "800*800像素以上的图片，可以在商品详情页提供图片放大功能"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "请不要在商品图片上添加除商品外的其他信息，如水印、优惠信息等，一经发现降权处理。查看<a target='_blank' href='//maowo.tmall.com/discussion.htm?id=76110&circleId=45' >图片规则</a>"
                    },
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "maxTargetSizeRule",
                        "exProperty": "include",
                        "value": "5242880"
                    }
                ],
                "subType": "COMPLEX",
                "tip": "[\"800*800像素以上的图片，可以在商品详情页提供图片放大功能\",\"请不要在商品图片上添加除商品外的其他信息，如水印、优惠信息等，一经发现降权处理。查看<a target='_blank' href='//maowo.tmall.com/discussion.htm?id=76110&circleId=45' >图片规则</a>\"]",
                "whole": false,
                "id": "item_images",
                "type": "COMPLEX",
                "fieldList": [
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_0",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_1",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_2",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_3",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_4",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "主图视频比例",
                "optionList": [
                    {
                        "label": "无",
                        "value": ""
                    },
                    {
                        "label": "1:1或16:9",
                        "value": "0"
                    },
                    {
                        "label": "3:4",
                        "value": "1"
                    }
                ],
                "defaultValues": "",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "devTipRule",
                        "value": "主图视频增量接口使用说明",
                        "url": "http://open.taobao.com/doc.htm?docId=108955&docType=1"
                    }
                ],
                "subType": "RADIO",
                "whole": false,
                "id": "image_video_type",
                "type": "SINGLECHECK"
            },
            {
                "name": "主图视频ID",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "==",
                                    "value": "1",
                                    "fieldId": "image_video_type"
                                },
                                {
                                    "symbol": "==",
                                    "value": "0",
                                    "fieldId": "image_video_type"
                                }
                            ],
                            "operator": "or",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "false"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "1.尺寸：此处可使用1：1或16：9比例视频ID"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "2.时长：≤60s，建议30秒以内短视频可优先在爱逛街等推荐频道展现"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "3.内容：突出商品1-2个核心卖点，不建议电子相册式的图片翻页视频"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "视频不会拍？查看完整教程（&lt;a href='https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10489970?_k=d4j90u' target='_blank'&gt;点击查看&lt;/a&gt;）"
                    }
                ],
                "subType": "INPUT",
                "tip": "[\"1.尺寸：此处可使用1：1或16：9比例视频ID\",\"2.时长：≤60s，建议30秒以内短视频可优先在爱逛街等推荐频道展现\",\"3.内容：突出商品1-2个核心卖点，不建议电子相册式的图片翻页视频\",\"视频不会拍？查看完整教程（&lt;a href='https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10489970?_k=d4j90u' target='_blank'&gt;点击查看&lt;/a&gt;）\"]",
                "whole": false,
                "id": "main_video",
                "type": "INPUT",
                "fieldList": [
                    {
                        "name": "视频id",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "long"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "main_video_id",
                        "type": "INPUT"
                    },
                    {
                        "name": "互动信息id",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "long"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "interactive_id",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "3:4商品图片",
                "rules": [
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "maxTargetSizeRule",
                        "exProperty": "include",
                        "value": "5242880"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "minImageSizeRule",
                        "exProperty": "include",
                        "value": "750x1000"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "==",
                                    "value": "1",
                                    "fieldId": "image_video_type"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "false"
                    }
                ],
                "subType": "COMPLEX",
                "whole": false,
                "id": "three_to_four_item_images",
                "type": "COMPLEX",
                "fieldList": [
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_0",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_1",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_2",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_3",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_image_4",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "商品无线图片",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "<span style='color:#f60;'>图片类型只能为gif、png、jpg、jpeg</span>"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "请不要在商品图片上添加除商品外的其他信息，如水印、优惠信息等，一经发现降权处理。"
                    }
                ],
                "subType": "COMPLEX",
                "tip": "[\"<span style='color:#f60;'>图片类型只能为gif、png、jpg、jpeg</span>\",\"请不要在商品图片上添加除商品外的其他信息，如水印、优惠信息等，一经发现降权处理。\"]",
                "whole": false,
                "id": "item_wireless_images",
                "type": "COMPLEX",
                "fieldList": [
                    {
                        "name": "商品无线图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_wireless_images_1",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品无线图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_wireless_images_2",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品无线图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_wireless_images_3",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品无线图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_wireless_images_4",
                        "type": "INPUT"
                    },
                    {
                        "name": "商品无线图片",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "item_wireless_images_5",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "商品资质图片",
                "rules": [],
                "subType": "COMPLEX",
                "whole": false,
                "id": "item_attach_images",
                "type": "COMPLEX",
                "fieldList": [
                    {
                        "name": "吊牌图",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxTargetSizeRule",
                                "exProperty": "include",
                                "value": "3145728"
                            },
                            {
                                "valueIntervalInclude": true,
                                "name": "minImageSizeRule",
                                "exProperty": "include",
                                "value": "800x800"
                            },
                            {
                                "valueIntervalInclude": true,
                                "name": "maxImageSizeRule",
                                "exProperty": "include",
                                "value": "1000x1000"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "attach_51",
                        "type": "INPUT"
                    },
                    {
                        "name": "耐久性标签",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            },
                            {
                                "valueIntervalInclude": false,
                                "name": "requiredRule",
                                "value": "true"
                            },
                            {
                                "unit": "byte",
                                "valueIntervalInclude": true,
                                "name": "maxTargetSizeRule",
                                "exProperty": "include",
                                "value": "3145728"
                            },
                            {
                                "valueIntervalInclude": true,
                                "name": "minImageSizeRule",
                                "exProperty": "include",
                                "value": "800x800"
                            },
                            {
                                "valueIntervalInclude": true,
                                "name": "maxImageSizeRule",
                                "exProperty": "include",
                                "value": "1000x1000"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "attach_52",
                        "type": "INPUT"
                    },
                    {
                        "name": "质检报告",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "attach_55",
                        "type": "INPUT"
                    },
                    {
                        "name": "合格证",
                        "rules": [
                            {
                                "valueIntervalInclude": false,
                                "name": "valueTypeRule",
                                "value": "url"
                            }
                        ],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "attach_56",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "商品竖图",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "valueTypeRule",
                        "value": "url"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "maxImageSizeRule",
                        "exProperty": "include",
                        "value": "800x1200"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "minImageSizeRule",
                        "exProperty": "include",
                        "value": "800x1200"
                    },
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "maxTargetSizeRule",
                        "exProperty": "include",
                        "value": "512000"
                    }
                ],
                "subType": "COMPLEX",
                "tip": "[\"<span>为能更好的展示服装的品质，建议上传的竖图为白底素材图或透明底素材图。上传符合规范的图片，您的商品在天猫App搜索，导购入口等均有有优先露出机会，请将素材抠图、边缘处理干净\",\"<span>图片不得出现品牌LOGO，不得出现任何形式的边框，不得出现水印，不得包含促销等文字说明；<span style='color:#f60;'>优先输入PNG格式，图片尺寸必须为800*1200，且大小不超过500K</span>，建议展示模特全身图</span>\"]",
                "whole": false,
                "id": "vertical_image",
                "type": "INPUT",
                "fieldList": [
                    {
                        "name": "图片",
                        "rules": [],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "imageUrl",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "透明素材图",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "valueTypeRule",
                        "value": "url"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "unit": "byte",
                        "valueIntervalInclude": true,
                        "name": "maxTargetSizeRule",
                        "exProperty": "include",
                        "value": "1048576"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "maxImageSizeRule",
                        "exProperty": "include",
                        "value": "800x800"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "minImageSizeRule",
                        "exProperty": "include",
                        "value": "800x800"
                    }
                ],
                "subType": "COMPLEX",
                "tip": "[\"上传PNG的透明底图片后，参加天猫官方活动将无需再提交对应的图片素材，并且享有官方活动会场等场景优先露出的机会，同时在天猫App搜索，导购入口，推荐等场景内享有优先露出机会，如该商品在日常场景被优先露出，则会将该图片替换为优先露出场景的商品主图。\",\"<span>请将素材抠图、边缘处理干净、居中放入<span style='color:#f60;'>透明、正方形</span>画布中，素材在画板内尽量撑满，但不要超出画板边界。</span>\",\"<span>仅支持PNG格式，图片尺寸必须为800*800，大小不超过1MB，查看<a target='_blank' href='//maowo.tmall.com/discussion.htm?spm=a211lz.11069290.0.0.6a4d2b90QPOV0n&amp;id=73896&amp;circleId=85&amp;filterTab=1' data-spm-anchor-id='a211lz.11069290.0.0'>完整规范</a></span>\"]",
                "whole": false,
                "id": "white_bg_image",
                "type": "INPUT",
                "fieldList": [
                    {
                        "name": "图片",
                        "rules": [],
                        "subType": "INPUT",
                        "whole": false,
                        "id": "imageUrl",
                        "type": "INPUT"
                    }
                ]
            },
            {
                "name": "商品所属的店铺类目",
                "optionList": [
                    {
                        "label": "热销推荐",
                        "leaf": true,
                        "parentValue": "0",
                        "value": "1344167083"
                    },
                    {
                        "label": "新品专区",
                        "leaf": true,
                        "parentValue": "0",
                        "value": "1344167359"
                    },
                    {
                        "label": "外套",
                        "leaf": false,
                        "parentValue": "0",
                        "value": "1344167074"
                    },
                    {
                        "label": "棉衣",
                        "leaf": true,
                        "parentValue": "1344167074",
                        "value": "1344167075"
                    },
                    {
                        "label": "羽绒服",
                        "leaf": true,
                        "parentValue": "1344167074",
                        "value": "1344167076"
                    },
                    {
                        "label": "西装",
                        "leaf": true,
                        "parentValue": "1344167074",
                        "value": "1344167077"
                    },
                    {
                        "label": "大衣",
                        "leaf": true,
                        "parentValue": "1344167074",
                        "value": "1344167078"
                    },
                    {
                        "label": "夹克",
                        "leaf": true,
                        "parentValue": "1344167074",
                        "value": "1344167079"
                    },
                    {
                        "label": "皮衣卫衣",
                        "leaf": true,
                        "parentValue": "1344167074",
                        "value": "1344167080"
                    },
                    {
                        "label": "衬衣",
                        "leaf": false,
                        "parentValue": "0",
                        "value": "1344166992"
                    },
                    {
                        "label": "长袖衬衣",
                        "leaf": true,
                        "parentValue": "1344166992",
                        "value": "1344167069"
                    },
                    {
                        "label": "中袖衬衣",
                        "leaf": true,
                        "parentValue": "1344166992",
                        "value": "1344167070"
                    },
                    {
                        "label": "裤子",
                        "leaf": false,
                        "parentValue": "0",
                        "value": "1344167071"
                    },
                    {
                        "label": "休闲裤",
                        "leaf": true,
                        "parentValue": "1344167071",
                        "value": "1344167072"
                    },
                    {
                        "label": "牛仔裤",
                        "leaf": true,
                        "parentValue": "1344167071",
                        "value": "1344167073"
                    },
                    {
                        "label": "针织衫毛衣",
                        "leaf": true,
                        "parentValue": "0",
                        "value": "1344167081"
                    },
                    {
                        "label": "T恤/POLO衫",
                        "leaf": true,
                        "parentValue": "0",
                        "value": "1344168544"
                    },
                    {
                        "label": "邮费补差价",
                        "leaf": true,
                        "parentValue": "0",
                        "value": "1344167563"
                    }
                ],
                "rules": [],
                "subType": "MULTICHECK",
                "whole": false,
                "id": "seller_cids",
                "type": "MULTICHECK"
            },
            {
                "name": "尺码测量示意图",
                "optionList": [
                    {
                        "label": "短袖",
                        "value": "https://img.alicdn.com/imgextra/i3/TB1MM5WHXXXXXbrXXXXXXXXXXXX_!!0-item_pic.jpg"
                    },
                    {
                        "label": "长袖",
                        "value": "https://img.alicdn.com/imgextra/i4/TB1TVOSHXXXXXcIXVXXXXXXXXXX_!!0-item_pic.jpg"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "RADIOIMG",
                "whole": false,
                "id": "size_measure_image",
                "type": "SINGLECHECK"
            }
        ],
        "name": "商品描述",
        "id": "desc"
    },
    {
        "data": [
            {
                "name": "发票",
                "optionList": [
                    {
                        "label": "有",
                        "value": "true"
                    }
                ],
                "defaultValues": "true",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "readOnlyRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "RADIO",
                "whole": false,
                "id": "has_invoice",
                "type": "SINGLECHECK"
            },
            {
                "name": "保修",
                "optionList": [
                    {
                        "label": "无",
                        "value": "false"
                    },
                    {
                        "label": "有",
                        "value": "true"
                    }
                ],
                "defaultValues": "false",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "RADIO",
                "whole": false,
                "id": "has_warranty",
                "type": "SINGLECHECK"
            },
            {
                "name": "退换货服务",
                "optionList": [
                    {
                        "label": "否",
                        "value": "false"
                    },
                    {
                        "label": "是",
                        "value": "true"
                    }
                ],
                "defaultValues": "false",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "凡使用支付宝服务付款购买本店商品，若存在质量问题或与描述不符，本店将主动提供退换货服务并承担来回邮费"
                    }
                ],
                "subType": "RADIO",
                "whole": false,
                "id": "sell_promise",
                "type": "SINGLECHECK"
            },
            {
                "name": "是否支持会员折扣",
                "optionList": [
                    {
                        "label": "支持会员打折",
                        "value": "true"
                    },
                    {
                        "label": "不支持会员打折",
                        "value": "false"
                    }
                ],
                "defaultValues": "false",
                "rules": [],
                "subType": "RADIO",
                "whole": false,
                "id": "has_discount",
                "type": "SINGLECHECK"
            },
            {
                "name": "拍下减库存",
                "optionList": [
                    {
                        "label": "是",
                        "value": "true"
                    },
                    {
                        "label": "否",
                        "value": "false"
                    }
                ],
                "defaultValues": "true",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "秒杀商品或超低价抢购促销商品或热卖商品请选择拍下减库存，可以防止超卖情况！<a target='blank' href='//service.taobao.com/support/knowledge-1110945.htm'>详情</a>"
                    }
                ],
                "subType": "RADIO",
                "tip": "[\"秒杀商品或超低价抢购促销商品或热卖商品请选择拍下减库存，可以防止超卖情况！\",\"https://service.taobao.com/support/knowledge-1110945.htm\"]",
                "whole": false,
                "id": "sub_stock",
                "type": "SINGLECHECK"
            },
            {
                "name": "商品秒杀",
                "optionList": [
                    {
                        "label": "电脑用户",
                        "value": "web"
                    },
                    {
                        "label": "手机用户",
                        "value": "wap"
                    }
                ],
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "若此商品参加秒杀活动，在此期间内必须设为秒杀商品，以防止作弊"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "秒杀商品的商品详情页面将不出现“加入购物车”按钮"
                    }
                ],
                "subType": "MULTICHECK",
                "tip": "[\"若此商品参加秒杀活动，在此期间内必须设为秒杀商品，以防止作弊\",\"秒杀商品的商品详情页面将不出现“加入购物车”按钮\"]",
                "whole": false,
                "id": "second_kill",
                "type": "MULTICHECK"
            },
            {
                "name": "返点比例",
                "defaultValues": "0.5",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "valueTypeRule",
                        "value": "decimal"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "tipRule",
                        "value": "该类商品的最低返点比例为0.5%，设定的返点比例必须是0.5%的整数倍，且不能高于1.5%"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "regexRule",
                        "value": "([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\\.[0-9]{0,5})?"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "minValueRule",
                        "exProperty": "include",
                        "value": "0.5"
                    },
                    {
                        "valueIntervalInclude": true,
                        "name": "maxValueRule",
                        "exProperty": "include",
                        "value": "1.5"
                    }
                ],
                "subType": "INPUTDECIMAL",
                "tip": "[\"该类商品的最低返点比例为0.5%，设定的返点比例必须是0.5%的整数倍，且不能高于1.5%\"]",
                "whole": false,
                "id": "auction_point",
                "type": "INPUT"
            },
            {
                "name": "商品状态",
                "optionList": [
                    {
                        "label": "出售中",
                        "value": "0"
                    },
                    {
                        "label": "定时上架",
                        "value": "1"
                    },
                    {
                        "label": "仓库中",
                        "value": "2"
                    }
                ],
                "defaultValues": "2",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "RADIO",
                "whole": false,
                "id": "item_status",
                "type": "SINGLECHECK"
            },
            {
                "name": "开始时间",
                "rules": [
                    {
                        "valueIntervalInclude": false,
                        "name": "valueTypeRule",
                        "value": "time"
                    },
                    {
                        "valueIntervalInclude": false,
                        "dependGroup": {
                            "dependExpressList": [
                                {
                                    "symbol": "!=",
                                    "value": "1",
                                    "fieldId": "item_status"
                                }
                            ],
                            "operator": "and",
                            "dependGroupList": [],
                            "empty": false
                        },
                        "name": "disableRule",
                        "value": "true"
                    },
                    {
                        "valueIntervalInclude": false,
                        "name": "requiredRule",
                        "value": "true"
                    }
                ],
                "subType": "INPUTTIME",
                "whole": false,
                "id": "start_time",
                "type": "INPUT"
            }
        ],
        "name": "售后及其他",
        "id": "afterSaleAndOthers"
    }
]
