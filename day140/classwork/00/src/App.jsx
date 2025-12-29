import React from "react"
function App(){
  function dog(a){
    a.target.src = 'https://dogsinc.org/about-us/our-extraordinary-dogs/'
  }

  return(
    <img  onClick={dog} src="https://www.google.com/search?sca_esv=08a87188ee7c8cf0&sxsrf=AE3TifNfeaml7XDaooR6nnSX9bTmfSs5QQ:1761849836418&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOha3O1YqG67F0QIhAOFN_ob1xGdzU5Cnyn-oUzTul2B5TTSISIGPst0CrrCForJ5t1wbSA6i1kUFCGga4_Ztypz0vYbOY_xSHWPvqhAYJEMYXBnYunRn9rtxkHxkTKn2dznZFy4LIeGsKF7Gm_KGS5IsDGN01g&q=cat&sa=X&ved=2ahUKEwiQzZaNysyQAxW9RfEDHRdUA_YQtKgLegQIExAB&biw=1920&bih=953#vhid=zWdzdPdo-A-wdM&vssid=mosaics" alt="cat" />
  )
}

export default App