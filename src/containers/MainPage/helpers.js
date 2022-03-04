const mapMainPageData=(data)=>{
return{
    name:data.name,
    height: data.height,
    mass: data.mass,
    hair_color: data.hair_color,
    skin_color: data.skin_color,
    eye_color: data.eye_color,
    birth_year: data.birth_year,
    gender:data.gender,
}
}

export default mapMainPageData;