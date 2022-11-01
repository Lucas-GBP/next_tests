import {render, screen} from "@testing-library/react";

import ImportantComponent from '../../../components/ImportantComponent';

describe("Test Description", () => {
    test('Testing Presentation', () => {
        render(<ImportantComponent data-testid='An Id'/>);
        console.log(screen.debug());

        const Presentation = screen.findByTestId('An Id');
        expect(Presentation).toBeDefined();
    });
});