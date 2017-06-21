package hbrown.demo.typeahead.state;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    private final StateRepository stateRepository;

    @Autowired
    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public List<State> save(Iterable<State> states) {
        return stateRepository.save(states);
    }

    public List<State> getStates() {
        return stateRepository.findAll();
    }

    public List<State> findStatesByNameLike(String name) {
        return stateRepository.findByNameIgnoreCaseIsLike(name);
    }
}
