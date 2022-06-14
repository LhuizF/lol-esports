import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Main from '../../components/Templates/Main';
import api from '../../services/api';

const Game: NextPage = () => {
  const [events, setEvents] = useState<EventGame>();
  const [title, setTitle] = useState<string>('Game');

  const router = useRouter();
  const { matchId } = router.query;

  useEffect(() => {
    if (!matchId) return;
    const getDate = async () => {
      await api.get(`getEventDetails?id=${matchId}`).then((res) => {
        setEvents(res.data.data.event);
      });
    };

    getDate();
  }, [matchId]);

  useEffect(() => {
    if (!events) return;
    const codeTeams = events.match.teams.map((team) => team.code).join(' vs ');

    setTitle(codeTeams);
  }, [events]);

  return <Main title={title}>Game</Main>;
};

export default Game;
