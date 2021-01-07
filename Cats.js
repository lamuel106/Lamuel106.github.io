let Myimage = document.querySelector('img');

Myimage.onclick = function()
{
    let mySrc = myimage.getAttribute('src');
    if (mySrc === "Carlee.jpg")
    {
        myimage.setAttribute('src', "Carlee2.jpg");
    }
    else
    {
        myimage.setAttribute('src', "Carlee.JPG")
    }
}