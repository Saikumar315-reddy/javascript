// 1.named functions  : a function with name
function name()
{
    console.log("hello");
}
name();

// 2.ananonmyous: A function without a name

const add = function(a,b)
{
    return a+b;

    
}
console.log(add(4,5));

//3. Arrow Function : concise way to write a function

const multiply=(c,d)=>
    {
        return c*d;
    }
    console.log(multiply(3,9))

    // 4. higher order function : A function that take  an another as an argument or return a function

    function higher(callback)
    {
       console.log("executing a callback");
       callback();
    }
    function callback()
    {
        console.log("i am a callback function")
    }
    higher(callback);


    // 5. constructor function :

    function Car(brand,color)
    {
        this.brand=brand;
        this.color=color;
    }
    const Cardetails = new Car("BMW" , "blue");
    console.log(Cardetails);


    // 6.  IIF  (Immediate Invoke Function ): A function that will executed as 


(
    function()
        {
            console.log("i am a IIF function");
        }
    
)()


// Strings : it is used to store and  maniplate the text

   let string1 = "sai kumar";
   let string2 = "reddy";

   let string3="$[string1] is a friend  $[string2]";
   console.log(string3);