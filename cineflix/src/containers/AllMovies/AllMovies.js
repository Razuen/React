import React, { useState, useEffect } from "react";
import MovieService from "../../services/MovieService";
import Heading from "../../components/Heading/Heading";
import CardList from "../../components/CardList/CardList";

function AllMovies({ movies }) {
  return (
    <div>
      <Heading text={"All Movies"} />
      <CardList dataList={movies} />
    </div>
  );
}

export default AllMovies;
