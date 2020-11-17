var product_list = [];

function getData(page) {
    let url = `https://raw.githubusercontent.com/cateye0609/products/master/data/pd${page}.json`
    $.getJSON(url, function (data) {
        product_list = data.listProduct;
        console.log(product_list);
        $('#product_list').empty();
        product_list.forEach(item => {
            let row = $('#product_list');
            row.append(
                "<div class='col-4'"+'>'+
                "<div class='card' style='width: 18rem;'>"+
                    `<img class='card-img-top' src="${item.media.link[0]}" alt='image'>`+
                    "<div class='card-body'>"+
                        `<h5 class='card-title'>${item.productName}</h5>`+
                        `<p class='card-text'>Color: ${item.productColor}</p>`+
                        `<p class='card-text'>Price: ${item.productPrice}</p>`+
                    "</div>"+
                "</div>"+
            "</div>"
            )
        });
    });
}

$(document).ready(function () {
    var i=1;
    getData(i);
    $('#next').click(()=>{
        if(i<12){
            getData(i+1);
            i+=1;
        }
    })
    $('#prev').click(()=>{
        if(i>1){
            getData(i-1);
            i-=1;
        }
    })
});