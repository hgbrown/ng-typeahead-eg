package hbrown.demo.typeahead;

import hbrown.demo.typeahead.state.State;
import hbrown.demo.typeahead.state.StateProvider;
import hbrown.demo.typeahead.state.StateService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LoadReferenceDataCommandLineRunner implements CommandLineRunner {

    private final Logger LOGGER = LoggerFactory.getLogger(getClass());

    private final StateService stateService;
    private final StateProvider stateProvider;

    @Autowired
    public LoadReferenceDataCommandLineRunner(StateService stateService,
                                              StateProvider stateProvider) {
        this.stateService = stateService;
        this.stateProvider = stateProvider;
    }

    @Override
    public void run(String... args) throws Exception {
        final List<State> states = stateService.save(stateProvider.getStates());
        LOGGER.info("Loaded {} states", states.size());
    }
}
