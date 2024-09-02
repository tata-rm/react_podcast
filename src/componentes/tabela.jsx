import React, { useState } from "react";
 
const TabelaPodcasts = () => {
    const [podcasts, setPodcasts] = useState([
        { id: 1, titulo: "Podcast 1", descricao: "Feedback do Podcast 1", assisti: "Sim" },
        { id: 2, titulo: "Podcast 2", descricao: "Feedback do Podcast 2", assisti: "Não, mas pretendo" },
    ]);
    
    const [novoPodcast, setNovoPodcast] = useState({ titulo: "", descricao: "", assisti: ""});
    const [editandoPodcast, setEditandoPodcast] = useState(null);
    
    const adicionarPodcast = () => {
        setPodcasts([
        ...podcasts,
        { id: podcasts.length + 1, ...novoPodcast },
        ]);
        setNovoPodcast({ titulo: "", descricao: "", assisti: ""});
    };
    
    const removerPodcast = (id) => {
        setPodcasts(podcasts.filter((podcast) => podcast.id !== id));
    };
    
    const editarPodcast = (id) => {
    const podcast = podcasts.find((p) => p.id === id);
        setEditandoPodcast(podcast);
    };
    
    const salvarEdicao = () => {
        setPodcasts(
        podcasts.map((p) =>
    p.id === editandoPodcast.id ? editandoPodcast : p
        )
        );
        setEditandoPodcast(null);
    };
 
    return (
    <div id="main">
        <p id='p'>Adicione na tabela podcasts que já escutou ou quer escutar e seus feedbacks sobre cada um!</p>
        <div id="table">
            <table border="1">
                <thead>
                    <tr>
                        <th>Nome podcast</th>
                        <th>Feedback</th>
                        <th>Já assisti?</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {podcasts.map((podcast) => (
                        <tr key={podcast.id}>
                            <td>{podcast.titulo}</td>
                            <td>{podcast.descricao}</td>
                            <td>{podcast.assisti}</td>
                            <td>
                                <button onClick={() => editarPodcast(podcast.id)}>Editar</button>
                                <button onClick={() => removerPodcast(podcast.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <h1>{editandoPodcast ? "Editar Podcast" : "Adicionar Novo Podcast"}</h1>
        <div id="input">
            <input
                type="text"
                placeholder="Título"
                value={editandoPodcast ? editandoPodcast.titulo : novoPodcast.titulo}
                onChange={(e) =>
                editandoPodcast
                    ? setEditandoPodcast({
                        ...editandoPodcast,
                        titulo: e.target.value,
                    })
                    : setNovoPodcast({ ...novoPodcast, titulo: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Descrição"
                value={editandoPodcast ? editandoPodcast.descricao : novoPodcast.descricao}
                onChange={(e) =>
                editandoPodcast
                    ? setEditandoPodcast({
                        ...editandoPodcast,
                        descricao: e.target.value,
                    })
                    : setNovoPodcast({ ...novoPodcast, descricao: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Já assisti?"
                value={editandoPodcast ? editandoPodcast.assisti : novoPodcast.assisti}
                onChange={(e) =>
                editandoPodcast
                    ? setEditandoPodcast({
                        ...editandoPodcast,
                        assisti: e.target.value,
                    })
                    : setNovoPodcast({ ...novoPodcast, assisti: e.target.value })
                }
            />
            <button onClick={editandoPodcast ? salvarEdicao : adicionarPodcast}>
                {editandoPodcast ? "Salvar" : "Adicionar"}
            </button>
        </div>
    </div>
    );
    };
    
    export default TabelaPodcasts;
