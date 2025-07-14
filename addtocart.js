const product = [
    {
        id: 0,
        image: 'image/0.jpg',
        title: 'The Great Gatsby',
        price: 520,
    },
    {
        id: 1,
        image: 'image/1.jpg',
        title: 'To Kill a Mockingbird',
        price: 360,
    },
    {
        id: 2,
        image: 'image/2.jpg',
        title: '1984',
        price: 230,
    },
    {
        id: 3,
        image: 'image/3.jpg',
        title: 'The Catcher in the Rye',
        price: 500,
    },
   
    {
        id: 4,
        image: 'image/4.jpg',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        price: 420,
    },
    {
        id: 5,
        image: 'image/5.webp',
        title: 'The Lord of the Rings',
        price: 100,
    },
    {
        id: 6,
        image: 'image/6.jpg',
        title: 'Brave New World',
        price: 130,
    },
    {
        id: 7,
        image: 'image/7.jpg',
        title: '1984 Revisited',
        price: 370,
    },
    {
        id: 8,
        image: 'image/8.jpg',
        title: 'The Hobbit Adventures',
        price: 320,
    },
    {
        id: 9,
        image: 'image/9.jpg',
        title: 'The Great Gatsby Returns',
        price: 170,
    },
    {
        id: 10,
        image: 'image/10.jpg',
        title: 'The Catcher in the Rye Redux',
        price: 230,
    },
    {
        id: 11,
        image: 'image/11.jpg',
        title: 'Harry Potter and the Enchanted Wand',
        price: 400,
    },
    {
        id: 12,
        image: 'image/12.jpeg',
        title: 'Dystopian Future 1984 Reimagined',
        price: 340,
    },
    {
        id: 13,
        image: 'image/13.jpg',
        title: 'To Kill a Mockingbird The Sequel',
        price: 240,
    }
    
];

const categories = [...new Set(product.map((item)=> {return item}))];
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
