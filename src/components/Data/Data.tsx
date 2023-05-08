import { DataDiv } from "./DataElements";

interface DataProps {
    numeroDoConcurso: number,
    dataPorExtenso: string
}

export default function Data(props: DataProps) {

    function removeZeroNoInicio(str: string): string {
        return str.replace(/\b0/g, '');
      }

    function concursoComDataPorExtenso() {

        return `Concurso ${props.numeroDoConcurso} - ${removeZeroNoInicio(props.dataPorExtenso)}`
    }

    return (
        <DataDiv>{concursoComDataPorExtenso()}</DataDiv>
    )
}