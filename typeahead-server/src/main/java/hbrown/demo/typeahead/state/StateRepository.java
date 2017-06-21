package hbrown.demo.typeahead.state;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StateRepository extends JpaRepository<State, Long> {

    List<State> findByNameIgnoreCaseIsLike(String name);

}
