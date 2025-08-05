import { Home } from './pages/Home';

import './style/theme.css'
import './style/global.css'
import { useState } from 'react';
import type { TaskStateModels } from './models/taskStateModels';

const initialState: TaskStateModels = {
    task: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentyCircle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    }
}

export function App() {
    const [state, setState] = useState(initialState)
    return <Home state={state} setState={setState} />;
}
