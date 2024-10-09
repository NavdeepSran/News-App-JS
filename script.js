var key="862117c117eb484d073476ffc05e4536";
var endpoint="https://gnews.io/api/v4/top-headlines?apikey="+key+"&lang=en&country=in&max=9&category=";
var srchendpoint="https://gnews.io/api/v4/search?apikey="+key+"&lang=en&country=in&max=9&q=";

function getNews(c){
   let url=endpoint+c;
   getData(url);
    
}

function searchNews(e){
    e.preventDefault() // It is mainly used in forms to prevent the defaiult behavious of forms that will reload the page on every click of button and it erases the data after refreshing.
    let q=$('#query').val();
    let url=srchendpoint+q;
    getData(url);
}

function getData(url){ //The data in this function was same in above two functions, so to avoid repetition of code, we create this function that will be called in the above functions.
 let text="";
    $.getJSON( url, function( data ) {
        $('#news_result').empty();
        $.each( data.articles, function( key,val ){
        text=text+ `<div class="col-md-4 mb-1">
        <div class="border p-2">
            <img src="${val.image}" class="w-100">
            <p class="fs-4">${val.title}</p>
            <p class="small text-muted"></p>
            <a href="${val.url}" class="btn btn-dark">Read Full Article</a>
        </div>
    </div>
    `
    })
      
    $('#news_result').append(text);

})
}