/*
 ** CodeViewBox
 ** V1.0 Beta
 ** Developed by Semilearn (https://semilearn.com)
 ** Developers: Amir Ravaghi (https://github.com/amirhravaghi)
 ** !!REQUIRES JQUERY!!
 */

$("document").ready(() => {
    'use strict';

    function codeViewBoxDefine() {
        //Main Library Object
        const codeViewBoxConst = {
            //Start method
            start: () => {
                //init styles set
                $(".codeviewbox").css(codeViewBoxConst.initStyles);
                $(".codeviewbox pre").css(codeViewBoxConst.PreInitStyle);
                $(".codeviewbox").css(codeViewBoxConst.themesStyles[codeViewBoxConst.themeSelected]);

                $(".codeviewbox").each(function() {
                    //content getter
                    var textContent = $(this).text();
                    //line getter
                    var lines = textContent.split('\n');
                    //removes top and bottom extra spaces
                    lines = spaceRemover(lines);
                    //left extra space counter
                    var spaceCount = spaceCounter(lines[0]);
                    //line customizations
                    lines.forEach((item, index) => {
                        //removing first line left extra space
                        if (index == 0) {
                            lines[index] = lines[index].trimLeft();
                        }
                        //Selecting special characters
                        lines[index] = specialCharsSpan(lines[index]);
                        //showing line count
                        if (codeViewBoxConst.showLineCount) {
                            lines[index] = `<span class='codeviewbox-linecount'>${index+1} |</span>` + lines[index];
                        }
                    });
                    //setting the text                    
                    $(this).find("pre").html(lines.join('\n'));
                });

                //final styles set
                $(".codeviewbox-line").css(codeViewBoxConst.lineStyles);
                $(".codeviewbox-linecount").css(codeViewBoxConst.lineCountStyles);
                $(".codeviewbox-special-chars-first").css(codeViewBoxConst.firstSpecialCharsStyles);
                $(".codeviewbox-special-chars-second").css(codeViewBoxConst.secondSpecialCharsStyles);
                $(".codeviewbox-comment-line").css(codeViewBoxConst.commentLineStyles);
            },

            //Container init styles
            initStyles: {
                "display": "block",
                "padding": "10px",
                "border-radius": "5px",
                "box-shadow": "1px 1px 3px rgba(0,0,0,0.2)",
                "font-size": "16px",
                "margin": "10px 0",
                "text-align": "left",
                "direction": "ltr"
            },

            //<pre> init styles
            PreInitStyle: {
                "margin": "0px",
                "color": "inherit"
            },

            //Themes Styles setter
            themesStyles: {
                "default": {
                    "background-color": "#fcfcfc",
                    "color": "gray"
                },
                "dark": {
                    "background-color": "#3c3c3c",
                    "color": "#cbcbcb"
                },
                "simple-blue": {
                    "background-color": "#ebf4ff",
                    "color": "cornflowerblue"
                },
                "simple-blue-dark": {
                    "background-color": "#2b425d",
                    "color": "#e3ebfa"
                },
                "old-school": {
                    "background-color": "white",
                    "color": "gray"
                },
                "old-school-dark": {
                    "background-color": "black",
                    "color": "white"
                },
                "custom": {

                }
            },

            //Themes
            theme: (theme, customStyles = null) => {
                //setting the theme styles
                codeViewBoxConst.themeSelected = theme;

                //setting text primary and secondary color
                switch (theme) {
                    case "simple-blue":
                        codeViewBoxConst.secondSpecialCharsStyles['color'] = "#d1b4ff";
                        codeViewBoxConst.firstSpecialCharsStyles['color'] = "#ababab";
                        break;

                    case "dark":
                        codeViewBoxConst.secondSpecialCharsStyles['color'] = "#6679f2";
                        break;

                    case "old-school":
                        codeViewBoxConst.firstSpecialCharsStyles['color'] = "red";
                        codeViewBoxConst.secondSpecialCharsStyles['color'] = "red";
                        break;

                    case "old-school-dark":
                        codeViewBoxConst.firstSpecialCharsStyles['color'] = "white";
                        codeViewBoxConst.secondSpecialCharsStyles['color'] = "white";
                        break;

                }

                //user custom styles
                if (customStyles !== null && theme === "custom") {
                    codeViewBoxConst.themesStyles['custom']['background-color'] = customStyles.backgroundColor;
                    codeViewBoxConst.themesStyles['custom']['color'] = customStyles.fontColor;
                    codeViewBoxConst.themesStyles['custom']['font-size'] = customStyles.fontSize;
                    codeViewBoxConst.firstSpecialCharsStyles['color'] = customStyles.textPrimaryColor;
                    codeViewBoxConst.secondSpecialCharsStyles['color'] = customStyles.textSecondaryColor;
                }
            },

            //Theme Selected
            themeSelected: "default",

            //Codeviewbox-line class styles
            lineStyles: {
                "margin-bottom": "3px"
            },

            //Codeviewbox-linecount class styles
            lineCountStyles: {
                "display": "inline-block",
                "width": "45px",
                "font-size": "13px",
                "opacity": "0.7",
                "margin-right": "5px"
            },

            //First special chars styles
            firstSpecialCharsStyles: {
                "color": "orange"
            },

            //Second special chars styles
            secondSpecialCharsStyles: {
                "color": "#6c7ad4"
            },

            commentLineStyles: {
                "color": "green"
            },

            //Showing line count
            showLineCount: true,

        };
        return codeViewBoxConst;
    }
    if (typeof(codeViewBox) === "undefined") {
        window.codeViewBox = codeViewBoxDefine();
    }
});


//Removes Top and Bottom extra spaces
function spaceRemover(_array) {
    while (_array[0].trim() === "") {
        _array.splice(0, 1);
    }
    while (_array[_array.length - 1].trim() === "") {
        _array.splice(_array.length - 1, _array.length - 1);
    }
    return _array;
}

//Counter for extra spaces before lines (USES FIRST LINE)
function spaceCounter(line) {
    var lineArray = line.split('');
    var counter = 0;
    for (var i = 0; i < lineArray.length; i++) {
        if (lineArray[i].trim() === "") {
            if (lineArray[i + 1]) {
                if (lineArray[i + 1] !== "") {
                    counter = i + 1;
                    break;
                }
            }
        }
    }
    return counter;
}

//Special characters
function specialCharsSpan(line) {
    var firstSpecialChars = ["(", ")", "[", "]", ":", ";", ".", "/", ">", "<", "{", "}"];
    var secondSpecialChars = ["'", '"', "`", "!", "~", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ",", "|", "?"];
    var lineArray = line.split('');
    lineArray.forEach((item, index) => {
        if (firstSpecialChars.includes(item)) {
            lineArray[index] = `<span class="codeviewbox-special-chars-first">${lineArray[index]}</span>`
        }
        if (secondSpecialChars.includes(item)) {
            lineArray[index] = `<span class="codeviewbox-special-chars-second">${lineArray[index]}</span>`
        }
    });
    return lineArray.join('');
};