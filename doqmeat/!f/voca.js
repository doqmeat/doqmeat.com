document.getElementById("vocaring").innerHTML = `
<style>

.vocacontainer::selection {
    background:#4cd4de;
    color:white;
}
 
.vocacontainer::-moz-selection {
    background:#4cd4de;
    color:white;
}

.vocacontainer{
    height:200px;
    padding:10px;
}

#vocaring {
    width:200px;
    margin:10px auto;
    background-color:#c9eff2;
    border:4px solid #4cd4de;
}

#vocaring table {
    margin:0 auto;
}

#vocaring .webring-info {
    text-align:center;
    color:#e74492;
    font-size:27px;
    letter-spacing:3px;
    text-shadow:#ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px, #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px, #ffffff -0.832294px 1.81859px 0px, #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97999px 0.28224px 0px, #ffffff -1.87291px -0.701566px 0px, #ffffff -1.30729px -1.51361px 0px, #ffffff -0.421592px -1.95506px 0px, #ffffff 0.567324px -1.91785px 0px, #ffffff 1.41734px -1.41108px 0px, #ffffff 1.92034px -0.558831px 0px;
    line-height:100%;
    margin-bottom:5px;
}

#vocaring .webring-links{
    font-size:17px;
    color:#e74492;
}

#vocaring .webring-links a{
    text-decoration: none;
    color:#e74492;
    text-shadow:#ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px, #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px, #ffffff -0.832294px 1.81859px 0px, #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97999px 0.28224px 0px, #ffffff -1.87291px -0.701566px 0px, #ffffff -1.30729px -1.51361px 0px, #ffffff -0.421592px -1.95506px 0px, #ffffff 0.567324px -1.91785px 0px, #ffffff 1.41734px -1.41108px 0px, #ffffff 1.92034px -0.558831px 0px;
    filter:drop-shadow( 0 2px var(--bc)) drop-shadow( 2px 0 var(--bc)) drop-shadow( 0 -2px var(--bc)) drop-shadow(-2px 0 var(--bc));
    transition:0.3s;
}

#vocaring .webring-links a:hover{
    letter-spacing:normal;
}

#vocaring img {
    -webkit-user-drag:none;
    -khtml-user-drag:none;
    -moz-user-drag:none;
    -o-user-drag:none;
    user-drag:none;
    user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    pointer-events:none;
}
</style>

<table class='vocacontainer' style='text-align: center;'>
    <tr>
        <td>
            <div class='webring-info'>VOCALOID<br>WEBRING</div>
            <div class='webring-links'>
                <a href='https://webring.adilene.net/index.php' target='_parent'>Index</a> &#8226; <a href='https://webring.adilene.net/members.php' target='_parent'>Members</a>
            </div>
        </td>
    </tr>
    <tr>
        <td style='text-align:center;'><img src='https://adilene.net/webring/images/vocaloid.png'/></td>
    </tr>
</table>
`;
