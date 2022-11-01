import {render, screen} from "@testing-library/react";

import ImportantComponent from '../../../components/ImportantComponent';

describe("Testing Presentation", () => {
    test('Rendering', () => {
        render(<ImportantComponent data-testid='An Id'/>);
        const Presentation = screen.getByTestId('An Id');

        screen.debug();
        expect(Presentation).toBeInTheDocument;
    });
});