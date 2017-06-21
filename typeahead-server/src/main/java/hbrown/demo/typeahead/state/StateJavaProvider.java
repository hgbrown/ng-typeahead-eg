package hbrown.demo.typeahead.state;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StateJavaProvider implements StateProvider {

    @Override
    public List<State> getStates() {
        final List<State> states = new ArrayList<>();
        states.add(new State(1L, "Alabama", "South"));
        states.add(new State(2L, "Alaska", "West"));
        states.add(new State(3L, "Arizona", "West"));
        states.add(new State(4L, "Arkansas", "South"));
        states.add(new State(5L, "California", "West"));
        states.add(new State(6L, "Colorado", "West"));
        states.add(new State(7L, "Connecticut", "Northeast"));
        states.add(new State(8L, "Delaware", "South"));
        states.add(new State(9L, "Florida", "South"));
        states.add(new State(10L, "Georgia", "South"));
        states.add(new State(11L, "Hawaii", "West"));
        states.add(new State(12L, "Idaho", "West"));
        states.add(new State(13L, "Illinois", "Midwest"));
        states.add(new State(14L, "Indiana", "Midwest"));
        states.add(new State(15L, "Iowa", "Midwest"));
        states.add(new State(16L, "Kansas", "Midwest"));
        states.add(new State(17L, "Kentucky", "South"));
        states.add(new State(18L, "Louisiana", "South"));
        states.add(new State(19L, "Maine", "Northeast"));
        states.add(new State(21L, "Maryland", "South"));
        states.add(new State(22L, "Massachusetts", "Northeast"));
        states.add(new State(23L, "Michigan", "Midwest"));
        states.add(new State(24L, "Minnesota", "Midwest"));
        states.add(new State(25L, "Mississippi", "South"));
        states.add(new State(26L, "Missouri", "Midwest"));
        states.add(new State(27L, "Montana", "West"));
        states.add(new State(28L, "Nebraska", "Midwest"));
        states.add(new State(29L, "Nevada", "West"));
        states.add(new State(30L, "New Hampshire", "Northeast"));
        states.add(new State(31L, "New Jersey", "Northeast"));
        states.add(new State(32L, "New Mexico", "West"));
        states.add(new State(33L, "New York", "Northeast"));
        states.add(new State(34L, "North Dakota", "Midwest"));
        states.add(new State(35L, "North Carolina", "South"));
        states.add(new State(36L, "Ohio", "Midwest"));
        states.add(new State(37L, "Oklahoma", "South"));
        states.add(new State(38L, "Oregon", "West"));
        states.add(new State(39L, "Pennsylvania", "Northeast"));
        states.add(new State(40L, "Rhode Island", "Northeast"));
        states.add(new State(41L, "South Carolina", "South"));
        states.add(new State(42L, "South Dakota", "Midwest"));
        states.add(new State(43L, "Tennessee", "South"));
        states.add(new State(44L, "Texas", "South"));
        states.add(new State(45L, "Utah", "West"));
        states.add(new State(46L, "Vermont", "Northeast"));
        states.add(new State(47L, "Virginia", "South"));
        states.add(new State(48L, "Washington", "South"));
        states.add(new State(49L, "West Virginia", "South"));
        states.add(new State(50L, "Wisconsin", "Midwest"));
        states.add(new State(51L, "Wyoming", "West"));
        return states;
    }
}
