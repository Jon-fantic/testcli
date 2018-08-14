let baseUrl = "";
if(process.env.NODE_ENV === 'production'){
  baseUrl="/"
}else{
  baseUrl="/test"

}
export const testapi = baseUrl+""
