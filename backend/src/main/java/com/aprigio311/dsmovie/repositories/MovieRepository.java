package com.aprigio311.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aprigio311.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
