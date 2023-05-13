function shuffle(array){
    var currentIndex = array.length,
    randomIndex;
    while(0 !== currentIndex){
        randomIndex=Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]]=[
            array[currentIndex],
            array[currentIndex]
        ];
    }
    return array;
}
function spin(){
    // wheel.play();
    const box=document.getElementById('box');
    const element=document.getElementById('mainbox');
    let SelectedItem="";

    let hundred = shuffle([1800,1836,1872]);
    let nintyFive=shuffle([1908,1944,1980])
    let twentySeven=shuffle([2484,2520,2556])
    let thirteen=shuffle([2592,2628,2664])
    let thirtyNine=shuffle([2700.2736,2772]);
    let sixty=shuffle([2808,2844,2880])
    let eleven=shuffle([2916,2952,2988])
    let seventyOne=shuffle([3024,3060,3096])
    let thirtyThree=shuffle([2004,2040,2076])
    let eightyFive=shuffle([2112,2148,2184])

    let results = shuffle([
        hundred[0],
        nintyFive[0],
        twentySeven[0],
        thirteen[0],
        thirtyNine[0],
        sixty[0],
        eleven[0],
        seventyOne[0],
        thirtyThree[0],
        eightyFive[0],

    ]);

    box.style.setProperty("transition","all ease 7s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    let spin_degree = (results[0]%360);
    console.log(spin_degree);
    // spinner value collection 
    if(346<spin_degree || (spin_degree<23 && spin_degree> -23)){
        SelectedItem = document.querySelector('.box1 .span3').textContent
        console.log(SelectedItem);
    }
    if(22<spin_degree && spin_degree <=58){
        SelectedItem = document.querySelector('.box1 .span2').textContent
        console.log(SelectedItem);
    }
    if(58<spin_degree && spin_degree <=94){
        SelectedItem = document.querySelector('.box1 .span1').textContent
        console.log(SelectedItem);
    }
    if(94<spin_degree && spin_degree <=130){
        SelectedItem = document.querySelector('.box2 .span5').textContent
        console.log(SelectedItem);
    }
    if(130<spin_degree && spin_degree <=166){
        SelectedItem = document.querySelector('.box2 .span4').textContent
        console.log(SelectedItem);
    }
    if(166<spin_degree && spin_degree <=202){
        SelectedItem = document.querySelector('.box2 .span3').textContent
        console.log(SelectedItem);
    }
    if(202<spin_degree && spin_degree <=238){
        SelectedItem = document.querySelector('.box2 .span2').textContent
        console.log(SelectedItem);
    }
    if(238<spin_degree && spin_degree <=274){
        SelectedItem = document.querySelector('.box2 .span1').textContent
        console.log(SelectedItem);
    }
    if(274<spin_degree && spin_degree <=310){
        SelectedItem = document.querySelector('.box1 .span5').textContent
        console.log(SelectedItem);
    }
    if(310<spin_degree && spin_degree <=346){
        SelectedItem = document.querySelector('.box1 .span4').textContent
        console.log(SelectedItem);
    }

    setTimeout(function(){
        applause.play()
        Swal.fire({
            title: '<strong>Horray!!!!!!</strong>',
            html:
              'You Have Won' +` <b>${SelectedItem}$</b> `+ `<a href="#">Collect Your Reward</a> `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          }).then((res) =>{
            // if(res.isConfirmed){
                box.style.setProperty("transition","initial");
                box.style.transform = "rotate(90deg)";
            // }
          })
       
    },7000)

}