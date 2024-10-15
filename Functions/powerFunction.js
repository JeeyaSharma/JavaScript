function exponentiation(base,exp)
{
    let ans=1;
    for(let i=1;i<=exp;i++)
    {
        ans*=base;
    }
    return ans;
};

let power=exponentiation(4,3);
console.log(power);