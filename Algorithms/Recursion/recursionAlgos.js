function rGFC(a,b){
    if(a === b){
        return a;
    }
    else if (a > b){
        return rGFC(a-b, b);
    }
    else{
        return rGFC(a, b-a);
    };
}
