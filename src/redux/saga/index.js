
import {testWatcher} from "./testSaga";


export function* rootWatcher() {
    yield testWatcher()
}
