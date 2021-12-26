import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";
import { gql } from "urql";
import { CreateExperienceFragmentFragmentDoc, CreateExperienceMutation } from "../generated";

export const createCache = () => {
	return cacheExchange({
		keys: {
			TopLanguages: () => null,
			TopLanguage: () => null
		},
		resolvers: {
			Query: {
				posts: relayPagination()
			}
		},
		updates: {
			Mutation: {
				createExperience(result: CreateExperienceMutation, _args, cache) {
					const fragment = gql`
						fragment _ on User {
							id
							experiences {
								...CreateExperienceFragment
							}
						}
						${CreateExperienceFragmentFragmentDoc}
					`;

					const newExperience = result.createExperience.record;
					const userId = newExperience.user.id;

					const oldUser = cache.readFragment(fragment, { id: userId });

					cache.writeFragment(fragment, {
						id: newExperience.user.id,
						experiences: oldUser.experiences.push(newExperience)
					});
				}
			}
		}
	});
};
