import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, Library } from 'lucide-react';
import publications from '../data/publications';

const sortedPublications = [...publications].sort((a, b) => {
  const aYear = a.year || -Infinity;
  const bYear = b.year || -Infinity;

  if (aYear !== bYear) {
    return bYear - aYear;
  }

  return b.id - a.id;
});

const publicationsByYear = sortedPublications.reduce((groups, publication) => {
  const label = publication.year || 'In press';

  if (!groups.has(label)) {
    groups.set(label, []);
  }

  groups.get(label).push(publication);
  return groups;
}, new Map());

const yearGroups = Array.from(publicationsByYear.entries());

const Publications = () => {
  return (
    <div className="min-h-screen lab-page-bg py-12" id="Publications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm">
            <Library size={16} aria-hidden="true" />
            Laura Piccio
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Publications
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A chronological record of research contributions, sorted with the latest publications first.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-red-600">
            {publications.length} publications
          </p>
          <a
            href="https://scholar.google.com/citations?user=1M9kNSQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition hover:border-red-600 hover:bg-red-50"
          >
            For full publication list go here
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="space-y-10">
          {yearGroups.map(([year, items], groupIndex) => (
            <motion.section
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * Math.min(groupIndex, 8) }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CalendarDays size={22} className="text-red-600" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900">{year}</h3>
                </div>
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-sm text-gray-500">
                  {items.length} {items.length === 1 ? 'publication' : 'publications'}
                </span>
              </div>

              <ol className="space-y-3">
                {items.map((publication) => (
                  <li
                    key={publication.id}
                    className="group bg-white rounded-lg border border-gray-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-100 hover:shadow-md"
                  >
                    <div className="flex gap-4">
                      <div className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600 sm:flex">
                        {publication.year || 'IP'}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-800 leading-relaxed">
                          {publication.citation}
                        </p>

                        {(publication.sourceUrl || publication.doi || publication.pmid) && (
                          <div className="mt-4 flex flex-wrap gap-3">
                            {publication.sourceUrl && (
                              <a
                                href={publication.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-sm font-medium text-red-600 hover:border-red-600 hover:bg-red-50 transition"
                              >
                                Scholar
                                <ExternalLink size={14} aria-hidden="true" />
                              </a>
                            )}
                            {publication.doi && (
                              <a
                                href={`https://doi.org/${publication.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-sm font-medium text-red-600 hover:border-red-600 hover:bg-red-50 transition"
                              >
                                DOI
                                <ExternalLink size={14} aria-hidden="true" />
                              </a>
                            )}
                            {publication.pmid && (
                              <a
                                href={`https://pubmed.ncbi.nlm.nih.gov/${publication.pmid}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:border-gray-700 hover:bg-gray-50 transition"
                              >
                                PMID {publication.pmid}
                                <ExternalLink size={14} aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
