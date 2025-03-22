// ABOUTME: This file contains integration tests for the content pages
// ABOUTME: It tests that the content pages render correctly with their layouts

import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import QueEsLenguaInclusiva from '@/pages/que-es-lengua-inclusiva';
import PorQueUsamosLaE from '@/pages/por-que-usamos-la-e';
import Glosario from '@/pages/glosario';
import Manifiesto from '@/pages/manifiesto';
import Ejemplos from '@/pages/ejemplos';
import Ensenar from '@/pages/ensenar-lengua-inclusiva';
import RecursosExternos from '@/pages/recursos-externos';
import Faq from '@/pages/preguntas-frecuentes';
import Historia from '@/pages/historia';
import Prensa from '@/pages/prensa';
import Creditos from '@/pages/creditos';
import Contribuir from '@/pages/contribuir';

describe('Content Pages Integration', () => {
  it('should render Qué es lengua inclusiva page with correct title', () => {
    render(<QueEsLenguaInclusiva />);
    expect(screen.getByRole('heading', { name: /qué es lengua inclusiva/i })).toBeDefined();
  });

  it('should render Por qué usamos la -e page with correct title', () => {
    render(<PorQueUsamosLaE />);
    expect(screen.getByRole('heading', { name: /por qué usamos la -e/i })).toBeDefined();
  });

  it('should render Glosario page with correct title', () => {
    render(<Glosario />);
    expect(screen.getByRole('heading', { name: /glosario de términos/i })).toBeDefined();
  });

  it('should render Manifiesto page with correct title', () => {
    render(<Manifiesto />);
    expect(screen.getByRole('heading', { name: /manifiesto político/i })).toBeDefined();
  });

  it('should render Ejemplos page with correct title', () => {
    render(<Ejemplos />);
    expect(screen.getByRole('heading', { name: /ejemplos/i })).toBeDefined();
  });

  it('should render Enseñar lengua inclusiva page with correct title', () => {
    render(<Ensenar />);
    expect(screen.getByRole('heading', { name: /enseñar lengua inclusiva/i })).toBeDefined();
  });

  it('should render Recursos externos page with correct title', () => {
    render(<RecursosExternos />);
    expect(screen.getByRole('heading', { name: /recursos externos/i })).toBeDefined();
  });

  it('should render Preguntas frecuentes page with correct title', () => {
    render(<Faq />);
    expect(screen.getByRole('heading', { name: /preguntas frecuentes/i })).toBeDefined();
  });

  it('should render Historia page with correct title', () => {
    render(<Historia />);
    expect(screen.getByRole('heading', { name: /historia del proyecto/i })).toBeDefined();
  });

  it('should render Prensa page with correct title', () => {
    render(<Prensa />);
    expect(screen.getByRole('heading', { name: /prensa y medios/i })).toBeDefined();
  });

  it('should render Créditos page with correct title', () => {
    render(<Creditos />);
    expect(screen.getByRole('heading', { name: /créditos y agradecimientos/i })).toBeDefined();
  });

  it('should render Contribuir page with correct title', () => {
    render(<Contribuir />);
    expect(screen.getByRole('heading', { name: /contribuir/i })).toBeDefined();
  });
});