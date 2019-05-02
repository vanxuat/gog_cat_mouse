Mouse =(name)=>{
    this.name=name;
    this.deal=false
}

Mouse.prototype.die=()=>{
    this.deal=true;
}


export default Mouse


