// define your actions here!
export function addMovie(obj){
  return {
    type: "ADD_MOVIE",
    movie: {
      title: obj.title,
      year: obj.year
    }
  }
}
export function deleteMovie(obj){
  return {
    type: "DELETE_MOVIE",
    movie: {
      id: obj.id,
      title: obj.title,
      year: obj.year
    }
  }
}
export function updateUsername(str){
  return {
    type: "UPDATE_USERNAME",
    username: str
  }
}
export function resetUsername(){
  return {
    type: "RESET_USERNAME",
    username: "default"
  }
}
