# CodeViewBox.JS
Show your code through html simplest as ever

![banner](https://akasoft.ir/semilearn/libraries/codeViewBox/cvb.png)
---
### Installing
After you downloaded **CodeViewBox** add the main or minified script to your project.
**jQUERY is required for this library**

### Getting Started
Just follow the steps and everything should be find :)
1. Create a **div** with class *codeviewbox*
2. Create a **&lt;pre&gt;** element into the div
3. Write your code into the pre element without any extra left space
4. Call start method in your page script **codeViewBox.start();**
```
<script>
$("document").ready(function(){
	codeViewBox.start();
});
</script>

<div class="codeviewbox">
	<pre>
Write your code here without any extra left space
	</pre>
</div>
```

---
### Customization and options
CodeViewBox gives you a lot of customization options:
1. 6 built-in themes (light & dark)
2. Using completely customized themes
3. Disable/Enable displaying line numbers
4. Customizing the basic styles of div and pre elements

*!! You should set your customization **before** calling start method*

#### Themes
You can change your code box theme by calling *theme* method:
```
codeViewBox.theme("themeName");
```

There are 6 built-in themes in codeViewBox
|default ![default](https://akasoft.ir/semilearn/libraries/codeViewBox/default.png)  |dark ![dark](https://akasoft.ir/semilearn/libraries/codeViewBox/dark.png) |simple-blue ![simple-blue](https://akasoft.ir/semilearn/libraries/codeViewBox/simple-blue.png)  |
|--|--|--|
|**simple-blue-dark** ![simple-blue-dark](https://akasoft.ir/semilearn/libraries/codeViewBox/simple-blue-dark.png)  |**old-school** ![old-school](https://akasoft.ir/semilearn/libraries/codeViewBox/old-school.png)  |**old-school-dark** ![enter image description here](https://akasoft.ir/semilearn/libraries/codeViewBox/old-school-dark.png)  |

---
#### Custom theme
You can customize the code box theme using *theme* method:
```
codeViewBox.theme("custom",{
	backgroundColor: "color",
	fontColor: "color",
	fontSize: "size",
	textPrimaryColor: "color",
	textSecondaryColor: "color"
});
```
**backgroundColor.**
To change the background color of the box

**fontColor.**
To change font main color

**fontSize.**
To change the size of the font

**textPrimaryColor.**
To change the color of:
( ,  ) ,  [ ,  ] ,  : ,  ; ,  .  ,  / ,  > ,  < ,  { ,   } 

**textSecondaryColor.**
To change the color of:
' ,  " ,  ` ,  ! ,  ~ ,  @ ,  # ,  $ ,  % ,  ^ ,  & ,  * ,  - ,  _ ,  + ,  = ,  , ,   | ,   ?

---
### Disable/Enable displaying line numbers
You can enable or disable displaying line number by changing *showLineCount*:
```
codeViewBox.showLineCount = true/false;
```
Also you can change the style of the line numbers:
```
codeViewBox.lineCountStyles["css-property"] = "value";
```

---
### Customizing the basic styles of div and pre elements
You can change the basic styles of the div and pre elements

**div**
```
codeViewBox.initStyles["css-property"] = "value";
```
**pre**
```
codeViewBox.PreInitStyles["css-property"] = "value";
```

---
### Example
You can find an example with html in **example** directory

---
### Built with
- JavaScript
- jQUERY
---
### Developers
This library is developed by **semilearn**.
**Main developer:** [AmirHoserin Ravaghi](https://github.com/amirhravaghi)

---
### Licence
This project is licensed under the MIT License - see the LICENSE.md file for details
