let arr = [
    [10,20,30,40,50],
    ['abc','efg','hij','klm','nop'],
    ['karachi','lahore','Islamabad','quetta']
]




  document.write(`<h3>Main Array [ ${[...arr]}]</h3> <br> `);

let copyArr1 = [...arr[0]]
let copyArr2 = [...arr[1]]
let copyArr3 = [...arr[2]]
document.write(`<h3> Nested Array 1 [${copyArr1}]  </h3>`);
document.write(`<h3> Nested Array 2 [${copyArr2}]  </h3>`);
document.write(`<h3> Nested Array 3 [${copyArr3}]  </h3>`);



document.write(`<h1 style="margin:50px; text-align: center;">Object Clonning From Spread Operator</h1>`)






let obj = {
    infinix:{
            
        hot10:{
            price : 20000,
            ram : 4,
            rom : 16,
        },

        hot11:{
            price : 21000,
            ram : 4,
            rom : 16,
        },

        hot12:{
            price : 25000,
            ram : 4,
            rom : 28,
        },
    },

    Samsung:{
            
        j4:{
            price : 25000,
            ram : 4,
            rom : 16,
        },

        note1:{
            price : 26000,
            ram : 6,
            rom : 26,
        },

        note2:{
            price : 30000,
            ram : 6,
            rom : 28,
        },
    },

    iphone:{
            
        i1:{
            price : 25000,
            ram : 4,
            rom : 16,
        },

        i2:{
            price : 30000,
            ram : 6,
            rom : 26,
        },

        i3:{
            price : 35000,
            ram : 6,
            rom : 28,
        },
    },
}

                document.write(`<h2> Main Object:  ${{...obj}} </h2>`)
                document.write(`<h3> Infinix nested Object 1 : ${{...obj.infinix}}</h3> <br>`)
                document.write(`<h3> Samsung nested Object 2 : ${{...obj.Samsung}}</h3><br>`)
                document.write(`<h3> Iphone nested Object 3 : ${{...obj.iphone}}</h3><br>`)

                document.write(`<h3> Iphone nested Object Price :  ${{...obj}.iphone.i3.price}<br> `);
                document.write(`<h3> Iphone nested Object Ram : ${{...obj}.iphone.i3.ram}<br> `);
                document.write(`<h3> Iphone nested Object Rom  : ${{...obj}.iphone.i3.rom}<br> `);
