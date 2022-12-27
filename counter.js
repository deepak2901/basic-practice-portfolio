function updateCounter() {
    const counter = document.getElementById('counter');
    //increment the counter everytime user visits the page by storing in local storage
    let count = localStorage.getItem('visiterCount');
    /**
     * if count is null then set count to 1
    * else increment the count by 1 (Note: count is a string so convert it to number using parseInt)
    */
    if(count == null){
        count = 1;
    }
    else{
        count++;
    }
    localStorage.setItem('visiterCount', count);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;
}
updateCounter();

function updateLocation(){
    const locti = document.getElementById('locti');
    let location = localStorage.getItem('visiterLocation');
    if (location == null){
        location = 1;
    }
    else{
        location++
    }
    localStorage.setItem('visiterLocation', location);
    locti.innerHTML = `Vistor Location: ${localStorage.getItem('visiterLocation')}`;
}
updateLocation();
