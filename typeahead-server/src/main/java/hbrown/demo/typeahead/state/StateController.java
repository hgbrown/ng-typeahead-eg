package hbrown.demo.typeahead.state;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StateController {

    private final StateService stateService;

    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    /**
     * Get a list of states. If no parameter is provided, then returns all the states, otherwise returns the states
     * whose names contains the specified parameter.
     *
     * @param name              an optional parameter, which can be used to limit the returned states to those states
     *                          whose name contain this value when case is ignored.
     * @return                  a list of states matching the specified criteria or all the states if no parameter is
     *                          provided.
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/states", produces = {"application/json"})
    public List<State> getStates(@RequestParam(name = "name", required = false) String name) {
        return name == null ? stateService.getStates() : stateService.findStatesByNameLike("%" + name + "%");
    }
}
