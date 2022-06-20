// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ
let myText = document.querySelector("#task");    // inputu bu değişkene atadık
let myList = document.querySelector("#list");     //list'i buraya atadık
let myButton = document.querySelector("#liveToastBtn");//butanuburaya
let ullength = document.getElementsByTagName("li");


//Mevcut listeyi silmek için çarpı butonunun oluşturulması 
for(let i=0 ; i<ullength.length;i++)
{
    let closeButton = document.createElement("span");
    closeButton.textContent="\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick=removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;

}


// Butonlara dinleyici tanımlaması
myButton=addEventListener('click',elemanEkle);


//fonksiyonlar

function check ()
{
    this.classList.toggle("checked");
}


function removeButton()
{
    this.parentElement.remove();
}

//Eleman eklemek için gerekenler
function elemanEkle(){
    if(myText.value=="")
    {
        $(".error").toast("show");
    }
    else{
        $(".success").toast("show");
    }

}

let liDom = document.createElement("li");
myList.appendChild(liDom);
liDom.innerHTML = task.value;
myText.value="";


// SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN
liDom.onclick=check;
let closeButton = document.createElement("span");
closeButton.textContent="\u00D7";
closeButton.classList.add("close");
closeButton.onclick=removeButton;

liDom.append(closeButton);
myList.append(liDom);
