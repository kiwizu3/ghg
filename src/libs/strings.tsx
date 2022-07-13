// ordinal val return
export const ordinal = function(n : any){
    return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"
}