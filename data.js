let buy = document.getElementsByClassName('shopBtn')
let sellAll = document.getElementsByClassName('sell')[0]
let buttons = ''
let app = document.getElementsByClassName('app')[0]
let bal = document.getElementsByClassName('bal')[0]
let money = +localStorage.getItem('money') || 0
let shopList = []
function createbuttons(){
   let fruits = ['🍇', '🍈']
   if(localStorage.getItem('shop' ) != null) {
       shopList = JSON.parse(localStorage.getItem('shop' ))

       if(shopList.includes('fruit1')){
        fruits.push('🍉', '🍊', '🍋',)
    }
    if(shopList.includes('fruit2')){
        fruits.push('🍌', '🍍', '🥭', '🍎')
    }
   }

for(i = 0; i < 25; i++){
    let Randomfruits = fruits[(Math.random()*(fruits.length-1)).toFixed(0)]
    buttons += `<button class = "fruitbtn"> ${Randomfruits} </button>`

}
bal.textContent = localStorage.getItem('money')
app.innerHTML = buttons
 
}

createbuttons()



let balance = JSON.parse(localStorage.getItem('balance')) || {"🍎":0,"🍉":0,"🥭":0,"🍍":0,"🍋":0,"🍇":0,"🍌":0,"🍊":0,"🍈":0}


let fruits = document.getElementsByClassName('fruitbtn')

function saveData(){
    localStorage.setItem('balance', JSON.stringify(balance))
}



    sellAll.addEventListener('click',function sell(e){
        let fruits = document.getElementsByClassName('fruitbtn')
        console.log(fruits)
for (let i = 0; i < fruits.length; i++) {
        balance[fruits[i].textContent.trim()]++
        console.log(balance)
        document.getElementsByClassName('balance-' + fruits[i].textContent.trim())[0].textContent = balance[fruits[i].textContent.trim()]
        saveData()

}

location.reload()

    })




for(i = 0; i < 25; i++){
    fruits[i].addEventListener('click',function collect(e){
        let text = document.createElement('img')
        text.classList.add('plus1')
        text.src = '-1-10-10-2023.png'

        text.style.top = e.clientY + 'px'
        text.style.left = e.clientX + 'px'

        setTimeout(
            function(){
                text.remove()
            }, 1900
        )

        document.body.append(text)

    if(e.target.textContent.trim() == '🍎' ) {
        balance['🍎']++
        console.log(balance)
        document.getElementsByClassName('balance-🍎')[0].textContent = balance['🍎']
    
    }
    if(e.target.textContent.trim() == '🍉' ) {
        balance['🍉']++
        console.log(balance)
        document.getElementsByClassName('balance-🍉')[0].textContent = balance['🍉']
    }
    if(e.target.textContent.trim() == '🍋' ) {
        balance['🍋']++
        console.log(balance)
        document.getElementsByClassName('balance-🍋')[0].textContent = balance['🍋']
    }

    if(e.target.textContent.trim() == '🍍' ) {
        balance['🍍']++
        console.log(balance)
        document.getElementsByClassName('balance-🍍')[0].textContent = balance['🍍']
    }
    if(e.target.textContent.trim() == '🥭' ) {
        balance['🥭']++
        console.log(balance)
        document.getElementsByClassName('balance-🥭')[0].textContent = balance['🥭']
    }
    if(e.target.textContent.trim() == '🍇' ) {
        balance['🍇']++
        console.log(balance)
        document.getElementsByClassName('balance-🍇')[0].textContent = balance['🍇']
    }
    if(e.target.textContent.trim() == '🍌' ) {
        balance['🍌']++
        console.log(balance)
        document.getElementsByClassName('balance-🍌')[0].textContent = balance['🍌']
    }if(e.target.textContent.trim() == '🍊' ) {
        balance['🍊']++
        console.log(balance)
        document.getElementsByClassName('balance-🍊')[0].textContent = balance['🍊']
    }if(e.target.textContent.trim() == '🍈' ) {
        balance['🍈']++
        console.log(balance)
        document.getElementsByClassName('balance-🍈')[0].textContent = balance['🍈']
    }

   


    saveData()
    })

}

function showBalance(){
    document.getElementsByClassName('balance-🍎')[0].textContent = balance['🍎'] || 0
    document.getElementsByClassName('balance-🥭')[0].textContent = balance['🥭'] || 0
    document.getElementsByClassName('balance-🍍')[0].textContent = balance['🍍'] || 0
    document.getElementsByClassName('balance-🍋')[0].textContent = balance['🍋'] || 0
    document.getElementsByClassName('balance-🍉')[0].textContent = balance['🍉'] || 0
    document.getElementsByClassName('balance-🍇')[0].textContent = balance['🍇'] || 0
    document.getElementsByClassName('balance-🍌')[0].textContent = balance['🍌'] || 0
    document.getElementsByClassName('balance-🍊')[0].textContent = balance['🍊'] || 0
    document.getElementsByClassName('balance-🍈')[0].textContent = balance['🍈'] || 0
}
showBalance()


let sell = document.getElementsByClassName('sell-fruit')


for(i = 0; i < buy.length; i++){
    buy[i].addEventListener('click', function(e){
        shopList.push(e.target.dataset.btn)
        localStorage.setItem('shop', JSON.stringify(shopList))
        location.reload()
    })
    }




for(i = 0; i < sell.length; i++){
    sell[i].addEventListener('click', function(e){
        // confirm('чи ви дійсно хочети продати всі фрукти?')  
        // console.log(sell[i])
        if (e.target.classList.contains('sell-🍎')) {
            money += balance['🍎'] * 8
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)



            balance['🍎'] = 0
    document.getElementsByClassName('balance-🍎')[0].textContent = balance['🍎']
            saveData()
        }
        if (e.target.classList.contains('sell-🍉')) {
            money += balance['🍉'] * 6
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍉'] = 0
    document.getElementsByClassName('balance-🍉')[0].textContent = balance['🍉']
            saveData()
        } if (e.target.classList.contains('sell-🍋')) {
            money += balance['🍋'] * 9
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍋'] = 0
    document.getElementsByClassName('balance-🍋')[0].textContent = balance['🍋']
            saveData()
        } if (e.target.classList.contains('sell-🍍')) {
            money += balance['🍍'] * 7
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍍'] = 0
    document.getElementsByClassName('balance-🍍')[0].textContent = balance['🍍']
            saveData()
        } if (e.target.classList.contains('sell-🥭')) {
            money += balance['🥭'] * 5
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🥭'] = 0
    document.getElementsByClassName('balance-🥭')[0].textContent = balance['🥭']
            saveData()
        }
        if (e.target.classList.contains('sell-🍇')) {
            money += balance['🍇'] * 8
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍇'] = 0
    document.getElementsByClassName('balance-🍇')[0].textContent = balance['🍇']
            saveData()
        }
        if (e.target.classList.contains('sell-🍌')) {
            money += balance['🍌'] * 7
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍌'] = 0
    document.getElementsByClassName('balance-🍌')[0].textContent = balance['🍌']
            saveData()
        }
        if (e.target.classList.contains('sell-🍊')) {
            money += balance['🍊'] * 4
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍊'] = 0
    document.getElementsByClassName('balance-🍊')[0].textContent = balance['🍊']
            saveData()
        }
        if (e.target.classList.contains('sell-🍈')) {
            money += balance['🍈'] * 7
            document.getElementsByClassName('bal')[0].textContent = money
            localStorage.setItem('money', money)
            balance['🍈'] = 0
    document.getElementsByClassName('balance-🍈')[0].textContent = balance['🍈']
            saveData()
        }
          

        
    })
}


